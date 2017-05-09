import { Component, OnInit } from '@angular/core';
import { Page } from "../pagination/page";
import { Product } from "../product/product";
import { OnPageChange } from "../pagination/pageable";
import { PageRequest } from "../pagination/page.request";
import { ProductService } from "../product/product.service";

@Component({
    selector: 'web-store-catalog',
    templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit, OnPageChange {

    page: Page<Product>;

    constructor(private productService: ProductService) {
        this.page = new Page<Product>();
    }

    ngOnInit(): void {
        this.onPageChange(new PageRequest(0, 6));
    }

    onPageChange(pageRequest: PageRequest): void {
        this.productService.fetchProducts(pageRequest)
            .subscribe(
                page => this.page = page,
                error => console.log(error)
            )
    }
}