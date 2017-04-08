import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryService } from "../../../common/category/category.service";
import { Category } from "../../../common/category/category";
import { Router } from "@angular/router";

@Component({
    selector: 'ws-admin-category-add',
    templateUrl: './admin-category-add.component.html'
})
export class AdminCategoryAddComponent implements OnInit {

    category: Category = new Category();

    constructor(private router: Router, private categoryService: CategoryService) {}

    ngOnInit(): void {}

    categoryNames(example: string): Observable<string[]> {
        return this.categoryService.fetchCategoryNames(example);
    }

    onSubmit(): void {
        this.categoryService.saveCategory(this.category)
            .subscribe(
                (error) => console.log(error),
                () => this.router.navigate(['/admin/category'])
            );
    }
}