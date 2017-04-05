import { OnInit, Component } from "@angular/core";
import { Category } from "../../../common/category/category";
import { CategoryService } from "../../../common/category/category.service";

@Component({
    selector: 'ws-admin-category-overview',
    templateUrl: './admin-category-overview.component.html'
})
export class AdminCategoryOverviewComponent implements OnInit {

    categories: Category[];

    constructor(private categoryService: CategoryService) {
    }

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