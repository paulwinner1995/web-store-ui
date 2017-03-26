import {OnInit, Component} from "@angular/core";
import {Category} from "../../../common/category/category";
import {CategoryService} from "../../../common/category/category.service";

@Component({
    selector: 'ws-category-overview',
    templateUrl: './sales-category-overview.component.html'
})
export class SalesCategoryOverviewComponent implements OnInit {

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