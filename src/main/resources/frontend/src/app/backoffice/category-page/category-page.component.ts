import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddProductDialogComponent} from "../product-page/add-product-dialog/add-product-dialog.component";
import {BsModalService, ModalOptions} from "ngx-bootstrap";
import {AddCategoryDialogComponent} from "./add-category-dialog/add-category-dialog.component";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  categories: Category[] = [];
  user: user;
  dialogOption: ModalOptions = {};

  constructor(private http: HttpClient, private modal: BsModalService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user && this.user.level === 'admin'){
      this.getCategories();
    }
  }

  getCategories(){
    this.http.get<Category[]>('/api/category/list').subscribe(rs => {
      this.categories = rs;
    })
  }

  addCategory(){
    this.modal.show(AddCategoryDialogComponent);
    this.modal.onHidden.subscribe(rs => {
      this.getCategories();
    })
  }

  delete(item: Category){
    this.http.post('/api/category/delete/' + item.id,null).subscribe(rs => {
    })
  }

}
