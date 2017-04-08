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
            .map(resp => resp.json() || []);
    }

    fetchCategoryNames(example: string): Observable<string[]> {
        let url = this.categoryUrl + '/names';

        let params = new URLSearchParams();
        params.set("example", example);

        return this.http.get(url, { search: params})
            .map(resp => resp.json() || []);
    }

    fetchCategory(name: string): Observable<Category> {
        let url = this.categoryUrl + '/' + name;

        return this.http.get(url).map(resp => resp.json() || {});
    }

    saveCategory(category: Category): Observable<Category> {
        return this.http.post(this.categoryUrl, category)
            .map(resp => resp.json() || {});
    }

    updateCategory(category: Category): Observable<Category> {
        return this.http.put(this.categoryUrl, category)
            .map(resp => resp.json() || {});
    }
}
