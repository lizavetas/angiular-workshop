import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import { Product } from '../../../shared/product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

    public form: FormGroup;
    public product: Product;

    constructor(private formBuilder: FormBuilder) { }

    onSubmit(): void {
        console.log(this.form.controls.description.value);
        console.log(this.form.controls.title.value);
        console.log(this.form.controls.id.value);
        console.log(this.form.controls.image.value);
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(2)
                ])
            ],

            id: ['', Validators.required],
            description: [''],
            image: ['']

          });
    }
}
