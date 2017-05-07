import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./product";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Page } from "../pagination/page";
import { PageRequest } from "../pagination/page.request";

@Injectable()
export class ProductService {

    private url = '/api/product';

    constructor(private http: Http) {
    }

    fetchProducts(pageRequest?: PageRequest): Observable<Page<Product>> {
        let params = pageRequest ? pageRequest.getSearchParams() : {};
        return this.http.get(this.url, { search: params})
            .map(resp => resp.json() || {})
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post(this.url, product)
            .map(resp => resp.json() || {})
    }
}
