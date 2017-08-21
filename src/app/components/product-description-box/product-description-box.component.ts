import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-product-description-box',
    templateUrl: './product-description-box.component.html',
    styleUrls: ['./product-description-box.component.css']
})

export class ProductDescriptionBoxComponent implements OnInit {
    @Input() title: string;
    public isHidden = true;
    // private isHidden = true => ng serve funktioniert(da compiliert im Browser), build nicht
    // keine private in tpl!!!!
    constructor() {
    }
    // public und void sind optional
    public clickBtn(): void {
        this.isHidden = !this.isHidden;
    }
    public toggle(event: MouseEvent): void {
        if (event.shiftKey) {
            this.isHidden = !this.isHidden;
        } else {
            alert('bla');
        }
    }
    ngOnInit() {
    }

}
