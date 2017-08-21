import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product';

import { ProductDataService } from '../../shared/product-data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];

  constructor(private productDataService: ProductDataService) {

  }

  ngOnInit() {
      this.productDataService.getProducts().subscribe(products => this.products = products);
  }

}
