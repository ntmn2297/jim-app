import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLoginInfo(){
    (document.querySelector('.b-form') as HTMLElement).style.opacity = '0.01';
    (document.querySelector('.box-form') as HTMLElement).style.left = '-37%';
    (document.querySelector('.box-info') as HTMLElement).style.right = '-37%';
  }

  closeLoginInfo(){
    (document.querySelector('.b-form') as HTMLElement).style.opacity = '1';
    (document.querySelector('.box-form') as HTMLElement).style.left = '0';
    (document.querySelector('.box-info') as HTMLElement).style.right = '-5px';
  }

}
