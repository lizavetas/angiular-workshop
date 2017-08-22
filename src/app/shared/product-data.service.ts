import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Product } from '../shared/product';


@Injectable()
export class ProductDataService {

    constructor() {}

    public getProducts(): Observable<Product[]> {
        return Observable.of([
            {
                'id': 1,
                'title': 'Samsung - Fernseher',
                'description': 'Ein toller Fernseher',
                'price': 3399,
                'image': 'http://via.placeholder.com/350x350'
            },
            {
                'id': 2,
                'title': 'Apple - iphone',
                'description': 'Wenn du kein iphone hast, dann hast du kein iphone',
                'price': 1299,
                'image': 'http://via.placeholder.com/350x350'
            },
            {
                'id': 3,
                'title': 'Klobürste',
                'description': 'Dieses Wundergerät wird ihnen als Multifunktionswerkzeug dienste leisten',
                'price': 99,
                'image': 'http://via.placeholder.com/350x350'
            }
        ]);
    }

}
