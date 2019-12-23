import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BsModalRef} from "ngx-bootstrap";
import {EventBusService} from "../service/event-bus.service";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  loginName: string = "";
  passWord: string = "";
  user: user;

  constructor(private http: HttpClient, private bsModalRef: BsModalRef, private eventBus: EventBusService) { }

  ngOnInit() {
  }

  login(loginName: string, passWord: string){
    this.http.post<user>("/api/user/login/" + loginName + "/" + passWord, null).subscribe(rs => {
      this.user = rs;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.eventBus.pushChange('user', this.user);
      this.bsModalRef.hide();
    });
  }

}
