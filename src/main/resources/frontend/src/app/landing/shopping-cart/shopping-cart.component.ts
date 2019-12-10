import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  totalPrice: number = 0;
  listCart: Cart[] = [];
  cart: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.listCart.forEach(r => {
      this.totalPrice += r.totalPrice;
    })
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
