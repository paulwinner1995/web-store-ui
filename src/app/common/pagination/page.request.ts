import { URLSearchParams } from "@angular/http"
import { PageParams } from "./page.params";

export class PageRequest {

    private searchParams: URLSearchParams;

    constructor(private page: number, private size: number) {
        this.searchParams = new URLSearchParams();

        this.searchParams.set(PageParams.PAGE, page.toString());
        this.searchParams.set(PageParams.SIZE, size.toString());
    }

    public getSearchParams(): URLSearchParams {
        return this.searchParams.clone();
    }
}
