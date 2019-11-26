import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap';
import { LoginDialogComponent } from 'src/app/landing/login-dialog/login-dialog.component';
import {HttpClient} from "@angular/common/http";
import {EventBusService} from "../../service/event-bus.service";
import {CompleterData, CompleterService} from "ng2-completer";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;
  isShowModal: boolean = false;
  categories: Category[] = [];
  searchStr: string;
  dataService: CompleterData;

  constructor(private modalService: BsModalService, private http: HttpClient, private eventBus : EventBusService, private completerService: CompleterService, private translate: TranslateService) {
    this.dataService = this.completerService.remote('/api/product/list','name','name');

    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.http.get<Category[]>('/api/category/list').subscribe(rs => {
      this.categories = rs;
      this.eventBus.pushChange('categories', this.categories);
    });
  }

  login(){
    this.modalService.show(LoginDialogComponent, {class: 'modal-dialog-centered'});
    (document.querySelector('.modal-content') as HTMLElement).style.border = 'none';
    this.isShowModal = true;
  }

}

