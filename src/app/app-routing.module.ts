import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { DraftToolComponent } from './draft-tool/draft-tool.component';
import { HomeComponent } from './home/home.component';
import { PlayerToolComponent } from './player-tool/player-tool.component';
import { StartComponent } from './start/start.component';
import { TeamToolComponent } from './team-tool/team-tool.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'start', component: StartComponent },
      { path: 'player-tool', component: PlayerToolComponent },
      { path: 'team-tool', component: TeamToolComponent },
      { path: 'draft-tool', component: DraftToolComponent },
      { path: '', redirectTo: 'start', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{
    provide: 'externalUrlRedirectResolver',
    useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      window.open((route.data as any).externalUrl);
    }
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
