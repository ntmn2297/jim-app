import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-message-check-out',
  templateUrl: './message-check-out.component.html',
  styleUrls: ['./message-check-out.component.scss']
})
export class MessageCheckOutComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
