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

    // public addDetail(key: string, value: string): void {
    //     this.productDetails.push(new ProductDetail(key, value));
    // }

    public addDetail(productDetail: ProductDetail): void {
        this.productDetails.push(productDetail)
    }

    public removeDetail(key: string): void {
        let index = this.productDetails.indexOf(new ProductDetail(key));
        this.productDetails.slice(index, 1);
    }

    public getDetails(): ProductDetail[] {
        return this.productDetails.slice(0, this.productDetails.length);
    }
}