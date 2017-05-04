///<reference path="../../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CategoryService} from "../../../common/category/category.service";
import {Observable} from "rxjs/Observable";
import {Product} from "../../../common/product/product";
import {ProductService} from "../../../common/product/product.service";

@Component({
    selector: 'ws-admin-product-add',
    templateUrl: './admin-product-add.component.html',
})
export class AdminProductAddComponent implements OnInit {

    product: Product = new Product();

    constructor(private router: Router,
                private categoryService: CategoryService,
                private productService: ProductService) {
    }

    ngOnInit(): void {}

    categoryNames(example: string): Observable<string[]> {
        return this.categoryService.fetchCategoryNames(example);
    }

    onSubmit(): void {
        this.productService.saveProduct(this.product)
            .subscribe(
                (resp) => this.router.navigate(['/admin/product']),
                (error) => console.log(error),
            );
    }
}