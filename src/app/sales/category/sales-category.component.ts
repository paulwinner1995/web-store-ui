import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../common/category/category.service";
import { Category } from "../../common/category/category";

@Component({
    selector: 'ws-sales-category-component',
    templateUrl: './sales-category.component.html'
})
export class SalesCategoryComponent implements OnInit {

    categories: Category[];

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.fetchCategories();
    }

    fetchCategories() {
        this.categoryService.fetchCategories()
            .subscribe(
                categories => this.categories = categories,
                error => console.log(error)
            )
    }
}