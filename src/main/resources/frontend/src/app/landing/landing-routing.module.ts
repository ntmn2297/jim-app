import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './landing.component';
import {ForSaleComponent} from "./for-sale/for-sale.component";
import {MyPageComponent} from "./my-page/my-page.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path:'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'my-page',
    component: MyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}
