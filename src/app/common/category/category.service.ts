import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Category } from './category';
import { PageRequest } from "../pagination/page.request";
import { Page } from "../pagination/page";

@Injectable()
export class CategoryService {

    private categoryUrl = '/api/category';

    constructor(private http: Http) {}

    fetchCategories(pageRequest?: PageRequest) : Observable<Page<Category>> {
        let params = pageRequest ? pageRequest.getSearchParams() : {};
        return this.http.get(this.categoryUrl, { search: params })
            .map(resp => resp.json() || []);
    }

    fetchCategoryNames(example: string): Observable<string[]> {
        let url = this.categoryUrl + '/names';

        let params = new URLSearchParams();
        params.set("example", example);

        return this.http.get(url, { search: params})
            .map(resp => resp.json() || []);
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
