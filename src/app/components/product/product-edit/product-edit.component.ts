import { Component, OnInit } from '@angular/core';

import { Product } from '../../../shared/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    public product: Product;

    constructor() { }

    ngOnInit() {
    }

}
