import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-update-category-dialog',
  templateUrl: './update-category-dialog.component.html',
  styleUrls: ['./update-category-dialog.component.scss']
})
export class UpdateCategoryDialogComponent implements OnInit {

  item: Category;

  constructor(private http: HttpClient, private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  submit(){
    let param = {
      "detail": this.item.detail,
      "img": this.item.img
    };
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/api/category/update/' + this.item.id + "/" + this.item.name, JSON.stringify(param), {headers: header}).subscribe(rs => {
      this.bsModalRef.hide();
    })
  }
}
