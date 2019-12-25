import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NormalOrder} from "../../../model/normal-order";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageCheckOutComponent} from "../message-check-out/message-check-out.component";

@Component({
  selector: 'app-check-out-dialog',
  templateUrl: './check-out-dialog.component.html',
  styleUrls: ['./check-out-dialog.component.scss']
})
export class CheckOutDialogComponent implements OnInit {

  error: boolean = false;
  user: user;
  listCart: Cart[];
  totalPrice: number;
  item: NormalOrder = {
    id: null,
    carts: '',
    price: this.totalPrice,
    status: 'WAITTING',
    address: '',
    phone: '',
    name: ''
  };

  constructor(private bsModalRef: BsModalRef, private http: HttpClient, private modal: BsModalService) { }

  ngOnInit() {
  }

  submit(){
    if(this.item.name == '' || this.item.address == '' || this.item.phone == '') {
      this.error = true;
      return;
    }
    let str: string = '';
    this.listCart.forEach(rs => {
      str += (rs.product.id.toString() + ":" + rs.amount.toString() + "|");
    });
    console.log(this.totalPrice);
    let param = [{
      "carts":  str,
      "price": this.totalPrice,
      "status": this.item.status,
      "address": this.item.address,
      "phone": this.item.phone,
      "name": this.item.name
    }];
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/api/normal-order/save', JSON.stringify(param), {headers: header}).subscribe(rs => {
      this.bsModalRef.hide();
      this.modal.show(MessageCheckOutComponent);
    });
    // this.listCart.forEach(rs => {
    //       this.updateProduct(rs);
    // });
  }

  updateProduct(item: Cart){
    let param = {
      "name": item.product.name,
      "detail": item.product.detail,
      "price": item.product.price,
      "quantity": item.product.quantity - item.amount
    };
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/api/product/update/' + item.product.id + "/" + item.product.categoryId, JSON.stringify(param), {headers: header}).subscribe(rs => {
    })
  }

}
