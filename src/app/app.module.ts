import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    PlayerToolComponent,
    TeamToolComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavigationDrawerModule,
    IgxSnackbarModule,
    IgxDropDownModule,
    IgxIconModule,
    IgxRippleModule,
  ],
  providers: [
    GlobalMessageService,
    ScreenResizeEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
