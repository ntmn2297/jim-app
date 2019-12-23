import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import {TranslateModule} from "@ngx-translate/core";
import { UserPageComponent } from './user-page/user-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { UpdateUserDialogComponent } from './user-page/update-user-dialog/update-user-dialog.component';
import { AddCategoryDialogComponent } from './category-page/add-category-dialog/add-category-dialog.component';

@NgModule({
  declarations: [BackofficeComponent, UserPageComponent, ProductPageComponent, CategoryPageComponent, OrderPageComponent, UpdateUserDialogComponent, AddCategoryDialogComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    TranslateModule
  ]
})
export class BackofficeModule { }
