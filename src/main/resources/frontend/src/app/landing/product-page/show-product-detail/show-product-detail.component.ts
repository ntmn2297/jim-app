import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-product-detail',
  templateUrl: './show-product-detail.component.html',
  styleUrls: ['./show-product-detail.component.scss']
})
export class ShowProductDetailComponent implements OnInit {

  product: Product;
  categories: Category[];
  constructor() { }

  ngOnInit() {
  }

  categoryName(id: number): string{
    let categoryName: string;
    this.categories.forEach(rs=> {
      if(rs.id == id) categoryName = rs.name;
    });
    return categoryName;
  }
}
