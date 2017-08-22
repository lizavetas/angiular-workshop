import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../shared/product';

import { ProductDataService } from '../../shared/product-data.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {


    public product: Product;

    constructor(private route: ActivatedRoute, private productDataService: ProductDataService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.productDataService.getProduct(params.id).subscribe((product: Product) => {
                this.product = product;
            });
        });
    }

}
