import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Product} from "./product";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Page} from "../pagination/page";

@Injectable()
export class ProductService {

    private url = '/api/product';

    constructor(private http: Http) {
    }

    fetchProducts(): Observable<Page<Product>> {
        return this.http.get(this.url)
            .map(resp => resp.json() || {})
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post(this.url, product)
            .map(resp => resp.json() || {})
    }
}
