import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventBusService} from "../../service/event-bus.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  cart: Product[] = [];
  listCart: Cart[] = [];
  category: Category;
  constructor( private http: HttpClient, private eventBus: EventBusService) { }

  ngOnInit() {
    this.http.get<Category[]>('/api/category/list').subscribe(rs => {
      this.categories = rs;
      this.eventBus.pushChange('categories', this.categories);
    });
    this.http.get<Product[]>('/api/product/list').subscribe(rs => {
      this.products = rs;
    });
    this.eventBus.listenChange<Category>('category').subscribe(rs => {
      this.category = rs;
      if(this.category != null){
        this.http.get<Product[]>('/api/product/list').subscribe(rs => {
          this.products = rs;
          this.products = this.products.filter(rs => {
            return rs.categoryId === this.category.id;
          });
        });
      }
    });
    this.eventBus.listenChange<Category[]>('categories').subscribe(rs => {
      this.categories = rs;
    });
  }

  showProductDetail(product: Product){

  }

  addToCart(product: Product){
    this.cart = JSON.parse(localStorage.getItem('listProductOfCart')) || [];
    this.listCart = JSON.parse(localStorage.getItem('listCart')) || [];
    let pr: Cart = {
      product: product,
      amount: 1,
      totalPrice: product.price
    };
    if(this.cart.findIndex(rs => rs.id === product.id) >= 0) {
      this.listCart.forEach(r => {
        if (r.product.id == product.id) {
          r.amount += 1;
        }
        r.totalPrice = r.product.price * r.amount;
      });
    } else this.listCart.push(pr);
    this.cart.push(product);
    this.eventBus.pushChange('cart', this.cart);
    this.eventBus.pushChange('listCart', this.listCart);
    localStorage.setItem('listProductOfCart', JSON.stringify(this.cart));
    localStorage.setItem('listCart', JSON.stringify(this.listCart));
  }
}

