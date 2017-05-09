import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service';
import { Page } from "../pagination/page";
import { OnPageChange } from "../pagination/pageable";
import { PageRequest } from "../pagination/page.request";

@Component({
    selector: 'web-store-category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit, OnPageChange {

    page: Page<Category>;

    constructor(private categoryService: CategoryService) {
        this.page = new Page<Category>();
    }

    ngOnInit(): void {
        this.fetchCategories();
    }

    fetchCategories() {
        this.categoryService.fetchCategories()
            .subscribe(
                page => this.page = page,
                error => console.log(error)
            );
    }

    onPageChange(pageRequest: PageRequest): void {
        this.categoryService.fetchCategories(pageRequest)
            .subscribe(
                page => this.page = page,
                error => console.log(error)
            )
    }
}