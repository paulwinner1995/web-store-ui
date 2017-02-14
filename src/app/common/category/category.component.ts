import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
    selector: 'web-store-category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

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
            );
    }

    fetchSubCategories(category: Category) {}
}