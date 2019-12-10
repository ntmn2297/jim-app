import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './landing.component';
import {BackofficeComponent} from "./backoffice/backoffice.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'backoffice',
    component: BackofficeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}
