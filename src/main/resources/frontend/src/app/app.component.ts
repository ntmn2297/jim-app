import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {CompleterData, CompleterService} from "ng2-completer";
import {HttpClient} from "@angular/common/http";
import {EventBusService} from "./service/event-bus.service";
import {TranslateService} from "@ngx-translate/core";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'temp-angular-app';
  bsModalRef: BsModalRef;
  isShowModal: boolean = false;
  categories: Category[] = [];
  searchStr: string;
  dataService: CompleterData;
  timeAccess: Date = new Date();
  user: user;

  constructor(private modalService: BsModalService, private http: HttpClient, private eventBus : EventBusService, private completerService: CompleterService, private translate: TranslateService) {
    this.dataService = this.completerService.remote('/api/product/list','name','name');
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
    window.addEventListener('beforeunload', (event) => {
      localStorage.removeItem('listProductOfCart');
      localStorage.removeItem('listCart');
    });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    this.eventBus.listenChange<user>('user').subscribe(rs => {
      this.user = rs;
    });
    this.http.get<Category[]>('/api/category/list').subscribe(rs => {
      this.categories = rs;
    });
  }

  changeCategory(category: Category){
    if(category){
      this.eventBus.pushChange('category', category);
    } else this.eventBus.pushChange('category', null);
  }

  login(){
    this.modalService.show(LoginDialogComponent, {class: 'modal-dialog-centered'});
    (document.querySelector('.modal-content') as HTMLElement).style.border = 'none';
    this.isShowModal = true;
  }

}

