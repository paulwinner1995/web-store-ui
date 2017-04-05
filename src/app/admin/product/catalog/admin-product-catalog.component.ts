import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../common/product/product.service";
import { Product } from "../../../common/product/product";

@Component({
    selector: 'ws-admin-product-catalog',
    templateUrl: './admin-product-catalog.component.html'
})
export class AdminProductCatalogComponent implements OnInit {

    products: Product[];

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.fetchProducts();
    }

    fetchProducts() {
        this.productService.fetchProducts()
            .subscribe(
                page => this.products = page.content,
                error => console.log(error)
            )
    }
}