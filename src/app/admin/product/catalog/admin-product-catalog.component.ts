import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../common/product/product.service";
import { Product } from "../../../common/product/product";
import { Page } from "../../../common/pagination/page";
import { Subscription } from "rxjs";
import { OnPageChange } from "../../../common/pagination/pageable";
import { PageRequest } from "../../../common/pagination/page.request";

@Component({
    selector: 'ws-admin-product-catalog',
    templateUrl: './admin-product-catalog.component.html'
})
export class AdminProductCatalogComponent implements OnInit, OnPageChange {

    page: Page<Product>;

    loading: Subscription;

    constructor(private productService: ProductService) {
        this.page = new Page<Product>();
    }

    ngOnInit(): void {
        this.loading = this.fetchProducts(new PageRequest(0, 2));
    }

    fetchProducts(pageRequest: PageRequest): Subscription {
        return this.productService.fetchProducts(pageRequest)
            .subscribe(
                page => this.page = page,
                error => console.log(error)
            )
    }

    onPageChange(pageRequest: PageRequest): void {
        this.fetchProducts(pageRequest);
    }
}