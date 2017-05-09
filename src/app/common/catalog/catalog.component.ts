import { Component, OnInit } from '@angular/core';
import { Page } from "../pagination/page";
import { Product } from "../product/product";
import { OnPageChange } from "../pagination/pageable";
import { PageRequest } from "../pagination/page.request";

@Component({
    selector: 'web-store-catalog',
    templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit, OnPageChange {

    page: Page<Product>;

    ngOnInit(): void {
    }

    onPageChange(pageRequest: PageRequest): void {
    }
}