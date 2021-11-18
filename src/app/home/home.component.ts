import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IgxNavigationDrawerComponent,
  IgxSnackbarComponent,
  IgxDropDownComponent,
  HorizontalAlignment,
  VerticalAlignment,
  ConnectedPositioningStrategy,
  CloseScrollStrategy,
  ISelectionEventArgs
} from 'igniteui-angular';
import { Router } from '@angular/router';
import { GlobalMessageService } from '../_services/global-message.service';
import { ScreenResizeEventService } from '../_services/screen-resize-event.service';


export interface ISideNavLink {
  link: string;
  icon: string;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(IgxNavigationDrawerComponent, { static: true }) navDrawer!: IgxNavigationDrawerComponent;
  @ViewChild('snackbar') snackbar!: IgxSnackbarComponent;
  @ViewChild(IgxDropDownComponent, { static: false }) public igxDropDown!: IgxDropDownComponent;

  LOGOUT = 'logout';
  year: number;
  snackbarMsg: string;
  // currentUser: IUser;
  pages = [
    {
      link: '/home/start',
      icon: 'home',
      name: 'Home'
    },
    {
      link: '/home/player-tool',
      icon: 'account_circle',
      name: 'Player Analyzer'
    },
    {
      link: '/home/team-tool',
      icon: 'groups',
      name: 'Team Analyzer'
    }
  ];

  private _positionSettings = {
    horizontalDirection: HorizontalAlignment.Left,
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalStartPoint: VerticalAlignment.Bottom
  };
  private _overlaySettings = {
    closeOnOutsideClick: true,
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
    scrollStrategy: new CloseScrollStrategy()
  };

  constructor(
    public gms: GlobalMessageService,
    public router: Router,
    public sres: ScreenResizeEventService,
  ) {
    this.snackbarMsg = '';
    this.year = new Date().getFullYear();
    this.gms.messages$.subscribe(newMsg => {
      this.snackbarMsg = newMsg;
      this.snackbar.open();
    });
  }

  ngOnInit() {
    this.navDrawer.closed.subscribe(() => this.sres.next('closed'));
  }

  navigateTo(link: string): void {
    this.router.navigateByUrl(link);
  }

  toggleDropDown(eventArgs: any) {
    this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
    this.igxDropDown.toggle(this._overlaySettings);
  }

  onSelection(e: ISelectionEventArgs) {
    const selectedValue = e.newSelection.value;
    if (selectedValue === this.LOGOUT) {
      this.logout();
    }
  }

  logout() {
    console.log('logging out')
  }
}
