import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryService } from "../../../common/category/category.service";
import { Category } from "../../../common/category/category";

@Component({
    selector: 'ws-admin-category-add',
    templateUrl: './admin-category-add.component.html'
})
export class AdminCategoryAddComponent implements OnInit {

    category: Category = new Category();

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {}

    categoryNames(example: string): Observable<string[]> {
        return this.categoryService.fetchCategoryNames(example);
    }

    onSubmit(): void {
        this.categoryService.saveCategory(this.category)
            .subscribe(() => alert("Category has been saved!"));
    }
}