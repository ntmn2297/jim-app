import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from "ngx-bootstrap";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  confirm: string = '';
  item: user = {
    id: null,
    loginName: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    gender: '',
    dateOfBirth: null,
    address: '',
    level: 'USER',
    token: ''
  };
  loginNameError: boolean;
  emailError: boolean;
  nullError = {
    name: true,
    loginName: true,
    phone: true,
    email: true,
    password: true,
    gender: true,
    dateOfBirth: true,
    address: true,
    confirm: true
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  checkLoginName(loginName: String){
    this.http.post<boolean>('/api/user/check-login-name/' + loginName, null).subscribe(rs =>{
      this.loginNameError = rs;
    });
  }

  checkEmail(email: String){
    this.http.post<boolean>('/api/user/check-email/' + email, null).subscribe(rs =>{
      this.emailError = rs;
    });
  }

  check(){
    this.nullError = {
      name: this.item.name != '',
      loginName: this.item.loginName != '',
      phone: this.item.phone != '',
      email: this.item.email != '',
      password: this.item.password != '',
      gender: this.item.gender != '',
      dateOfBirth: this.item.dateOfBirth != null,
      address: this.item.address != '',
      confirm: this.confirm != ''
    };
    console.log(this.confirm);
    console.log(this.item);
    console.log(this.nullError);
    if(!this.nullError.name && !this.nullError.loginName && !this.nullError.phone && !this.nullError.email && !this.nullError.password && !this.nullError.gender && !this.nullError.dateOfBirth && !this.nullError.address){
      this.checkLoginName(this.item.loginName);
      this.checkEmail(this.item.email);
      this.submit();
    }
  }

  submit(){
    if(this.loginNameError == false && this.emailError == false && this.nullError){
      let param = {
        "id": this.item.id,
        "name": this.item.name,
        "loginName": this.item.loginName,
        "phone": this.item.phone,
        "email": this.item.email,
        "password": this.item.password,
        "gender": this.item.gender,
        "dateOfBirth": this.item.dateOfBirth,
        "level": this.item.level,
        "address": this.item.address,
        "token": this.item.token
      };
      let header: HttpHeaders = new HttpHeaders().set('Content-type','application/json');
      this.http.post('/api/user/save', JSON.stringify(param), {headers: header}).subscribe(rs => {});
    }
  }

}
