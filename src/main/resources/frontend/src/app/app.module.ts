import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {CarouselModule, ModalModule} from "ngx-bootstrap";
import {EventBusService} from "./service/event-bus.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CompleterService, LocalDataFactory, RemoteDataFactory} from "ng2-completer";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";
import {BadgeComponent} from "./badge/badge.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent, LoginDialogComponent, BadgeComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [EventBusService, CompleterService, LocalDataFactory, RemoteDataFactory],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {}
