  import { Component, OnInit } from '@angular/core';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
  import {EventBusService} from "../../service/event-bus.service";
  import {BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  cart: Product[] = [];
  constructor(private eventBus: EventBusService, private modalService: BsModalService) { }

  ngOnInit() {
    this.eventBus.listenChange<Product[]>('list-cart').subscribe(rs => {
      this.cart = rs;
    })
  }

  showCart(){

  }

}
