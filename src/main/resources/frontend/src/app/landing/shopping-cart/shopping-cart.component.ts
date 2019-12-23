import { Component, OnInit } from '@angular/core';
import {EventBusService} from "../../service/event-bus.service";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  totalPrice: number = 0;
  listCart: Cart[] = [];
  cart: Product[] = [];

  constructor(private eventBus: EventBusService, private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.listCart.forEach(r => {
      this.totalPrice += r.totalPrice;
    })
  }

  changeProductAmount(product: Cart){
    let count: number = 0;
    this.cart.forEach(rs=>{
      if(rs.id === product.product.id) count += 1;
    });
    if(count > product.amount){
      this.cart.splice(this.cart.indexOf(product.product), count - product.amount);
      this.totalPrice -= product.product.price;
    } else if (count < product.amount){
      for (let i = 0; i < (product.amount - count); i++) this.cart.push(product.product);
      this.totalPrice += product.product.price;
    }
    if(product.amount == 0) {
      this.removeProduct(product);
    } else {
      localStorage.setItem('listProductOfCart', JSON.stringify(this.cart));
      localStorage.setItem('listCart', JSON.stringify(this.listCart));
    }
  }

  removeProduct(cart: Cart){
    this.listCart.splice(this.listCart.indexOf(cart), 1);
    this.cart.forEach(r => {
      if(r.id == cart.product.id) this.cart.splice(this.cart.indexOf(r), cart.amount);
    });
    localStorage.setItem('listProductOfCart', JSON.stringify(this.cart));
    localStorage.setItem('listCart', JSON.stringify(this.listCart));
  }

}
