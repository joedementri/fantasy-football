import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxButtonModule,
  IgxCardModule,
  IgxDropDownModule,
  IgxIconModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxSnackbarModule
} from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GlobalMessageService } from './_services/global-message.service';
import { ScreenResizeEventService } from './_services/screen-resize-event.service';
import { StartComponent } from './start/start.component';
import { PlayerToolComponent } from './player-tool/player-tool.component';
import { TeamToolComponent } from './team-tool/team-tool.component';
import { DraftToolComponent } from './draft-tool/draft-tool.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    PlayerToolComponent,
    TeamToolComponent,
    DraftToolComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxNavigationDrawerModule,
    IgxSnackbarModule,
    IgxDropDownModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule,
    IgxCardModule
  ],
  providers: [
    GlobalMessageService,
    ScreenResizeEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
