import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {CarouselModule, ModalModule} from "ngx-bootstrap";
import { ProductPageComponent } from './product-page/product-page.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import {Ng2CompleterModule} from "ng2-completer";
import { BadgeComponent } from './badge/badge.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [LandingComponent, HeaderComponent, LoginDialogComponent, ProductPageComponent, FooterComponent, BadgeComponent],
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
  entryComponents: [LoginDialogComponent]
})
export class LandingModule { }
