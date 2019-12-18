import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.scss']
})
export class ForSaleComponent implements OnInit {

  categories: Category[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Category[]>('/api/category/list').subscribe(rs => {
      this.categories = rs;
    });
  }

}
