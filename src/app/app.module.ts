import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxAutocompleteModule,
  IgxButtonModule,
  IgxCardModule,
  IgxDropDownModule,
  IgxIconModule,
  IgxInputGroupModule,
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
import { AutocompletePipeStartsWith, PlayerToolComponent } from './player-tool/player-tool.component';
import { TeamToolComponent } from './team-tool/team-tool.component';
import { DraftToolComponent } from './draft-tool/draft-tool.component';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './_services/database/database.service';
import { AllPlayersService } from './_services/all-players/all-players.service';
import { HttpClientModule } from '@angular/common/http';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { SleeperService } from './_services/sleeper/sleeper.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    PlayerToolComponent,
    AutocompletePipeStartsWith,
    TeamToolComponent,
    DraftToolComponent,
    PlayerInfoComponent
  ],
  imports: [
    HttpClientModule,
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
    IgxCardModule,
    IgxAutocompleteModule,
    IgxInputGroupModule
  ],
  providers: [
    GlobalMessageService,
    ScreenResizeEventService,
    DatabaseService,
    AllPlayersService,
    SleeperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
