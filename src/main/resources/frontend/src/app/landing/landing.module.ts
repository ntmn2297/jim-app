import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import {CarouselModule, ModalModule} from "ngx-bootstrap";
import { ProductPageComponent } from './product-page/product-page.component';
import {FormsModule} from "@angular/forms";
import {Ng2CompleterModule} from "ng2-completer";
import { BadgeComponent } from './badge/badge.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TranslateModule} from "@ngx-translate/core";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { MyPageComponent } from './my-page/my-page.component';
import { CheckOutDialogComponent } from './shopping-cart/check-out-dialog/check-out-dialog.component';
import { MessageCheckOutComponent } from './shopping-cart/message-check-out/message-check-out.component';
import { ShowProductDetailComponent } from './product-page/show-product-detail/show-product-detail.component';



@NgModule({
  declarations: [LandingComponent, ProductPageComponent, BadgeComponent, ShoppingCartComponent, ForSaleComponent, MyPageComponent, CheckOutDialogComponent, MessageCheckOutComponent, ShowProductDetailComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    CarouselModule,
    Ng2CompleterModule,
    FontAwesomeModule,
    TranslateModule,
  ],
  entryComponents: [ ShoppingCartComponent, CheckOutDialogComponent, MessageCheckOutComponent, ShowProductDetailComponent]
})
export class LandingModule { }
