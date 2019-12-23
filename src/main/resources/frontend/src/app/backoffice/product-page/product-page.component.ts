import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BsModalService, ModalOptions} from "ngx-bootstrap";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  user: user;
  products: Product[] =[];
  category: Category[] = [];
  dialogOption: ModalOptions = {};
  constructor(private http: HttpClient, private modal: BsModalService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.http.post<Product[]>('/api/product/user-product/' + this.user.id,null).subscribe(rs => {
      this.products = rs;
    });
    this.http.get<Category[]>('/api/category/list').subscribe(rs=> {
      this.category = rs;
    })
  }

  categoryName(id: number): string{
    let categoryName: string;
    this.category.forEach(rs=> {
      if(rs.id == id) categoryName = rs.name;
    });
    return categoryName;
  }

  delete(item: Product){
    this.http.post('/api/product/delete/' + item.id,null).subscribe(rs => {
    })
  }


}
