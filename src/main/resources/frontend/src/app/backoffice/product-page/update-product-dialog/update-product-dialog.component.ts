import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-update-product-dialog',
  templateUrl: './update-product-dialog.component.html',
  styleUrls: ['./update-product-dialog.component.scss']
})
export class UpdateProductDialogComponent implements OnInit {

  categories: Category[] = [];
  item: Product;

  constructor(private http: HttpClient, private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  submit(){
    let param = {
      "name": this.item.name,
      "detail": this.item.detail,
      "price": this.item.price,
      "quantity": this.item.quantity,
      "img": this.item.img
    };
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/api/product/update/' + this.item.id + "/" + this.item.categoryId, JSON.stringify(param), {headers: header}).subscribe(rs => {
      this.bsModalRef.hide();
    })
  }
}
