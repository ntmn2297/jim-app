import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  categories: Category[] = [];
  user: user;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user && this.user.level === 'admin'){
      this.http.get<Category[]>('/api/category/list').subscribe(rs => {
        this.categories = rs;
      })
    }
  }

  delete(item: Category){
    this.http.post('/api/category/delete/' + item.id,null).subscribe(rs => {
    })
  }

}
