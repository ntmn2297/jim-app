import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.scss']
})
export class ForSaleComponent implements OnInit {

  user: user;
  categories: Category[] = [];
  item: Product = {
    id: null,
    name: '',
    detail: '',
    price: null,
    quantity: null,
    img: '',
    categoryId: null
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    this.http.get<Category[]>('/api/category/list').subscribe(rs => {
      this.categories = rs;
    });
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
    })
  }

}
