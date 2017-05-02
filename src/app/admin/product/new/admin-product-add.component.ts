import { Component } from "@angular/core";
import {Router} from "@angular/router";
import {CategoryService} from "../../../common/category/category.service";
import {Observable} from "rxjs/Observable";
import {Product} from "../../../common/product/product";

@Component({
    selector: 'ws-admin-product-add',
    templateUrl: './admin-product-add.component.html'
})
export class AdminProductAddComponent {

    product: Product = new Product();

    constructor(private router: Router, private categoryService: CategoryService) {}

    categoryNames(example: string): Observable<string[]> {
        return this.categoryService.fetchCategoryNames(example);
    }

    onSubmit() : void {}
}