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
import { BackofficeComponent } from './backoffice/backoffice.component';



@NgModule({
  declarations: [LandingComponent, ProductPageComponent, BadgeComponent, ShoppingCartComponent, BackofficeComponent],
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
  entryComponents: [ ShoppingCartComponent]
})
export class LandingModule { }
