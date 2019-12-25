import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  users: user[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<user[]>('/api/user/list').subscribe(rs => {
      this.users = rs;
    })
  }

}
