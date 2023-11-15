import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
