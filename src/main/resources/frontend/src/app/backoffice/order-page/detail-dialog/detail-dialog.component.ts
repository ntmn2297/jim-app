import { Component, OnInit } from '@angular/core';
import {NormalOrder} from "../../../model/normal-order";
import {HttpClient} from "@angular/common/http";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit {

  item: NormalOrder;
  listCart: Cart[] = [];


  constructor(private http: HttpClient, private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.item.carts.split('|').forEach(rs => {
      if(rs){
        this.http.get<Product>('/api/product/' + rs.split(':')[0]).subscribe(product => {
          let i: Cart = {
            product: product,
            amount: parseInt(rs.split(':')[1]),
            totalPrice: product.price * parseInt(rs.split(':')[1])
          };
          this.listCart.push(i);
        });
      }
    })
  }

}
