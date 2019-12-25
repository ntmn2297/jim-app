import { Component, OnInit } from '@angular/core';
import {EventBusService} from "../../service/event-bus.service";
import {BsModalRef, BsModalService, ModalModule, ModalOptions} from "ngx-bootstrap";
import {CheckOutDialogComponent} from "./check-out-dialog/check-out-dialog.component";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  totalPrice: number = 0;
  listCart: Cart[] = [];
  cart: Product[] = [];
  dialogOption: ModalOptions = {};
  user: user;

  constructor(private eventBus: EventBusService, private bsModalRef: BsModalRef, private modal: BsModalService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
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
    this.totalPrice -= cart.totalPrice;
    if(this.totalPrice < 0) this.totalPrice = 0;
    localStorage.setItem('listProductOfCart', JSON.stringify(this.cart));
    localStorage.setItem('listCart', JSON.stringify(this.listCart));
  }

  checkOut(){
    this.dialogOption.initialState = {
      user: this.user,
      listCart: this.listCart,
      totalPrice: this.totalPrice
    };
    this.bsModalRef.hide();
    this.modal.show(CheckOutDialogComponent, this.dialogOption);
  }
}
