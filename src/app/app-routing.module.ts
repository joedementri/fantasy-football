import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'start', component: StartComponent },
      { path: 'player-tool', component: StartComponent },
      { path: 'team-tool', component: StartComponent },
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
