import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Category } from './category';

@Injectable()
export class CategoryService {

    private categoryUrl = '/api/category';

    constructor(private http: Http) {}

    fetchCategories() : Observable<Category[]> {
        return this.http.get(this.categoryUrl)
            .map(resp => resp.json() || [])
            .catch(this.handleError);
    }

    fetchCategoryNames(example: string): Observable<string[]> {
        let url = this.categoryUrl + '/names';

        let params = new URLSearchParams();
        params.set("example", example);

        return this.http.get(url, { search: params})
            .map(resp => resp.json() || []);
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
