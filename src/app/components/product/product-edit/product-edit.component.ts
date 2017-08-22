import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../shared/product';

import { ProductDataService } from '../../../shared/product-data.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    public product: Product;

    constructor(private route: ActivatedRoute, private productDataService: ProductDataService, private router: Router) {
    }

    save(value) {
        if (value.id === '' || value.price === '') {
            console.log('fehler', value);
        }

        this.router.navigate(['/products']);
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.productDataService.getProduct(params.id).subscribe((product: Product) => {
                this.product = product;
            });
        });
    }

}
