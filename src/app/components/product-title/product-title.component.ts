import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.css']
})
export class ProductTitleComponent implements OnInit {

  @Output() clickHeader = new EventEmitter<string>();

  clickedHeader() {
      this.clickHeader.emit('header was clicked');
  }

  constructor() { }

  ngOnInit() {
  }

}
