import { Component, OnInit } from '@angular/core';
import {NormalOrder} from "../../model/normal-order";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BsModalService, ModalOptions} from "ngx-bootstrap";
import {DetailDialogComponent} from "./detail-dialog/detail-dialog.component";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  orders: NormalOrder[] = [];
  dialogConfig: ModalOptions = {};
  currentStatus: string;
  canUpdate: boolean = false;

  constructor(private http: HttpClient, private modal: BsModalService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    this.http.get<NormalOrder[]>('/api/normal-order/list').subscribe(rs => {
      this.orders = rs;
    })
  }

  detail(item: NormalOrder){
    this.dialogConfig.initialState = {
      item: item
    };
    this.modal.show(DetailDialogComponent, this.dialogConfig);
  }

  updateOrder(item: NormalOrder){
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/api/normal-order/' + item.id + '/' + item.name, item.status,{headers: header}).subscribe(rs => {
      this.getOrders();
    })
    this.canUpdate = false;
  }

}
