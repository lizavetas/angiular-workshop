import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-product-description-box',
    templateUrl: './product-description-box.component.html',
    styleUrls: ['./product-description-box.component.css']
})

export class ProductDescriptionBoxComponent implements OnInit {
    public isHidden = true;
    constructor() {
    }
    clickBtn() {
        this.isHidden = !this.isHidden;
    }
    ngOnInit() {
    }

}
