import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import {TranslateModule} from "@ngx-translate/core";
import { UserPageComponent } from './user-page/user-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AddCategoryDialogComponent } from './category-page/add-category-dialog/add-category-dialog.component';
import { AddProductDialogComponent } from './product-page/add-product-dialog/add-product-dialog.component';
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap";
import { UpdateProductDialogComponent } from './product-page/update-product-dialog/update-product-dialog.component';
import { UpdateCategoryDialogComponent } from './category-page/update-category-dialog/update-category-dialog.component';
import { DetailDialogComponent } from './order-page/detail-dialog/detail-dialog.component';

@NgModule({
  declarations: [BackofficeComponent, UserPageComponent, ProductPageComponent, CategoryPageComponent, OrderPageComponent, AddCategoryDialogComponent, AddProductDialogComponent, UpdateProductDialogComponent, UpdateCategoryDialogComponent, DetailDialogComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    TranslateModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  entryComponents: [AddProductDialogComponent, AddCategoryDialogComponent, UpdateProductDialogComponent, UpdateCategoryDialogComponent, DetailDialogComponent]
})
export class BackofficeModule { }
