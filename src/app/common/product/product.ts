import {ProductDetail} from "./product.detail";

export class Product {

    private details: ProductDetail[];

    constructor(public name?: string,
                public code?: string,
                public amount?: number,
                public price?: number,
                public category?: string,
                public description?: string) {
        this.details = [];
    }

    public addDetail(productDetail: ProductDetail): void {
        this.details.push(productDetail)
    }

    public removeDetail(productDetail: ProductDetail): void {
        let index = this.details.indexOf(productDetail);
        this.details.splice(index, 1);
    }

    public getDetails(): ProductDetail[] {
        return this.details.slice(0, this.details.length);
    }
}