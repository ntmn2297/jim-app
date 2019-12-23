import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackofficeComponent } from './backoffice.component';
import {CategoryPageComponent} from "./category-page/category-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  { path: '', component: BackofficeComponent },
  { path: 'category-page', component: CategoryPageComponent },
  { path: 'order-page', component: OrderPageComponent },
  { path: 'product-page', component: ProductPageComponent },
  { path: 'user-page', component: UserPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
