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
  constructor( private http: HttpClient, private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.listenChange<Category[]>('categories').subscribe(rs => {
      this.categories = rs;
    });
    this.http.get<Product[]>('/api/product/list').subscribe(rs => {
      this.products = rs;
    });
  }

  addToCart(product: Product){
    this.cart.push(product);
    this.eventBus.pushChange('list-cart', this.cart);
  }

}

