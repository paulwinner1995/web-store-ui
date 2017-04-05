import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'ws-admin-category-add',
    templateUrl: './admin-category-add.component.html'
})
export class AdminCategoryAddComponent implements OnInit {

    categoryForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.categoryForm = this.formBuilder.group({
            name: ['', Validators.required],
            parent: ['']
        });
    }

    onSubmit(): void {
        alert("Category has been saved!");
    }
}