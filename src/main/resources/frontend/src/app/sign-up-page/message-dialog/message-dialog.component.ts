import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  confirm(){
    this.bsModalRef.hide();
    window.location.pathname = '/landing';
  }

}
