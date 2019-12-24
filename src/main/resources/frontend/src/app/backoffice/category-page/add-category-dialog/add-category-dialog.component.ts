import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss']
})
export class AddCategoryDialogComponent implements OnInit {

  item: Category = {
    id: null,
    name: '',
    detail: '',
    img: ''
  };

  constructor(private http: HttpClient, private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  submit(){
    let param = [{
      "id": this.item.id,
      "name": this.item.name,
      "detail": this.item.detail,
      "img": this.item.img
    }];
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/api/category/save', JSON.stringify(param), {headers: header}).subscribe(rs => {
      this.bsModalRef.hide();
    })
  }

}
