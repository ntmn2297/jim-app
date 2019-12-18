  import { Component, OnInit } from '@angular/core';
  import {faAddressBook, faBookmark, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
  import {EventBusService} from "../../service/event-bus.service";
  import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap";
  import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";
  import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faBookMark = faBookmark;
  faAddressBook = faAddressBook;
  cart: Product[] = [];
  listCart: Cart[] = [];
  bsModalRef: BsModalRef;
  dialogConfig: ModalOptions = {};
  categories: Category[] = [];
  constructor(private eventBus: EventBusService, private modalService: BsModalService, private http: HttpClient) {}

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('listProductOfCart')) || [];
    this.listCart = JSON.parse(localStorage.getItem('listCart')) || [];
    this.eventBus.listenChange<Product[]>('cart').subscribe(rs => {
      this.cart = rs;
    });
    this.eventBus.listenChange<Cart[]>('listCart').subscribe(rs => {
      this.listCart = rs;
    });
    this.http.get<Category[]>('/api/category/list').subscribe(rs => {
      this.categories = rs;
    })
  }

  showCart(){
    this.dialogConfig.initialState = {
      listCart: this.listCart,
      cart: this.cart
    };
    this.modalService.show(ShoppingCartComponent, this.dialogConfig);
    (document.querySelector('.modal-dialog') as HTMLElement).style.minWidth = '1000px';
  }

  changeCategory(category: Category){
    if(category){
      this.eventBus.pushChange('category', category);
    } else this.eventBus.pushChange('category', null);
  }

}
