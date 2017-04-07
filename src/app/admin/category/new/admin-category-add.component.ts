import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { CategoryService } from "../../../common/category/category.service";

@Component({
    selector: 'ws-admin-category-add',
    templateUrl: './admin-category-add.component.html'
})
export class AdminCategoryAddComponent implements OnInit {

    categoryForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.categoryForm = this.formBuilder.group({
            name: ['', Validators.required],
            parent: ['']
        });
    }

    categoryNames(example: string): Observable<string[]> {
        return this.categoryService.fetchCategoryNames(example);
    }

    onSubmit(): void {
        if (!this.categoryForm.valid) return;

        this.categoryService.saveCategory(this.categoryForm.value)
            .subscribe(() => alert("Category has been saved!"));
    }
}