import { OnInit, Component } from "@angular/core";
import { Category } from "../../../common/category/category";
import { CategoryService } from "../../../common/category/category.service";
import { Page } from "../../../common/pagination/page";
import { OnPageChange } from "../../../common/pagination/pageable";
import { PageRequest } from "../../../common/pagination/page.request";

@Component({
    selector: 'ws-admin-category-overview',
    templateUrl: './admin-category-overview.component.html'
})
export class AdminCategoryOverviewComponent implements OnInit, OnPageChange {

    page: Page<Category>;

    constructor(private categoryService: CategoryService) {
        this.page = new Page<Category>();
    }

    ngOnInit(): void {
        this.onPageChange(new PageRequest(0, 10))
    }

    fetchCategories(): void {
        this.categoryService.fetchCategories()
            .subscribe(
                page => this.page = page,
                error => console.log(error)
            )
    }

    onPageChange(pageRequest: PageRequest): void {
        this.categoryService.fetchCategories(pageRequest)
            .subscribe(
                page => this.page = page,
                error => console.log(error)
            )
    }
}