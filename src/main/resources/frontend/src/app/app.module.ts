import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from "@angular/common/http";
  import {BsDatepickerModule, CarouselModule, ModalModule} from "ngx-bootstrap";
import {EventBusService} from "./service/event-bus.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CompleterService, LocalDataFactory, RemoteDataFactory} from "ng2-completer";
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {GlobalHttpInterceptor} from "./global-http-interceptor";
import {FormsModule} from "@angular/forms";
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import {MatDatepickerModule} from "@angular/material/datepicker";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    SignUpPageComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    MatDatepickerModule,
    BsDatepickerModule
  ],
  providers: [EventBusService, CompleterService, LocalDataFactory, RemoteDataFactory,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent],
  entryComponents: [ LoginDialogComponent]
})
export class AppModule {}
