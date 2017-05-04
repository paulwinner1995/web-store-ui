import {ProductDetail} from "./product.detail";

export class Product {

    private productDetails: ProductDetail[];

    constructor(public name?: string,
                public code?: string,
                public amount?: number,
                public price?: number,
                public category?: string,
                public description?: string) {
        this.productDetails = [];
    }

    public addDetail(productDetail: ProductDetail): void {
        this.productDetails.push(productDetail)
    }

    public removeDetail(productDetail: ProductDetail): void {
        let index = this.productDetails.indexOf(productDetail);
        this.productDetails.splice(index, 1);
    }

    public getDetails(): ProductDetail[] {
        return this.productDetails.slice(0, this.productDetails.length);
    }
}