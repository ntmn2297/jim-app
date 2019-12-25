import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BsModalService, ModalOptions} from "ngx-bootstrap";
import {AddProductDialogComponent} from "./add-product-dialog/add-product-dialog.component";
import {UpdateProductDialogComponent} from "./update-product-dialog/update-product-dialog.component";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  user: user;
  products: Product[] =[];
  categories: Category[] = [];
  dialogOption: ModalOptions = {};
  constructor(private http: HttpClient, private modal: BsModalService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getProduct();
    this.getCategories();
  }

  getProduct(){
    this.http.post<Product[]>('/api/product/user-product/' + this.user.id,null).subscribe(rs => {
      this.products = rs;
    });
  }

  getCategories(){
    this.http.get<Category[]>('/api/category/list').subscribe(rs=> {
      this.categories = rs;
    })
  }

  categoryName(id: number): string{
    let categoryName: string;
    this.categories.forEach(rs=> {
      if(rs.id == id) categoryName = rs.name;
    });
    return categoryName;
  }

  delete(item: Product){
    this.http.post('/api/product/delete/' + item.id,null).subscribe(rs => {
    })
  }

  updateProduct(item: Product){
    this.dialogOption.initialState = {
      categories: this.categories,
      item: item,
    };
    this.modal.show(UpdateProductDialogComponent, this.dialogOption);
    this.modal.onHidden.subscribe(rs => {
      this.getProduct();
    })
  }

  addProduct(){
    this.dialogOption.initialState = {
      categories: this.categories
    };
    this.modal.show(AddProductDialogComponent, this.dialogOption);
    this.modal.onHidden.subscribe(rs => {
      this.getProduct();
      this.getCategories();
    })
  }

}
