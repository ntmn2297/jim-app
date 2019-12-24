import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  categories: Category[] = [];
  user: user;
  item: Product = {
    id: null,
    name: '',
    detail: '',
    price: null,
    quantity: null,
    img: '',
    categoryId: null
  };

  constructor(private http: HttpClient, private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  submit(){
    let param = [{
      "id": this.item.id,
      "name": this.item.name,
      "detail": this.item.detail,
      "price": this.item.price,
      "quantity": this.item.quantity,
      "img": this.item.img,
      "categoryId": this.item.categoryId,
      "userId": this.user.id || null
    }];
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/api/product/save', JSON.stringify(param), {headers: header}).subscribe(rs => {
      this.bsModalRef.hide();
    })
  }

}
