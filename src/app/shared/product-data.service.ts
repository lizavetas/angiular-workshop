import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Product } from '../shared/product';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductDataService {

    constructor(private http: HttpClient) {}

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:4730/products');
    }

    public getProduct(id: String): Observable<Product> {
        return this.http.get<Product>('http://localhost:4730/products/' + id);
    }
}
