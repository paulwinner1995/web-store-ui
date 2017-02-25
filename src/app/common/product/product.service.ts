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
            .catch(this.handleError)
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
