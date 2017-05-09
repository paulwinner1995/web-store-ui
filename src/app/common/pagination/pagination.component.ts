import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Page } from "./page";
import { PageRequest } from "./page.request";

@Component({
    selector: 'ng-pagination',
    template: `
        <div *ngIf="page.totalPages > 1" class="row">
            <div class="col-md-6 text-left">
                <span class="pagination">с {{pageInfo.from}} по {{pageInfo.to}} из {{pageInfo.total}}</span>
            </div>
            <div class="col-md-6 text-right">
                <ul class="pagination">
                    <li *ngIf="!page.first" (click)="firstPage()"><span>&laquo;</span></li>
                    <li *ngIf="!page.first" (click)="prevPage()"><span>&lsaquo;</span></li>
                    <li *ngFor="let number of pages"
                        [ngClass]="{'active': page.number == number}"
                        (click)="numberPage(number)">
                        <span>{{number + 1}}</span>
                    </li>
                    <li *ngIf="!page.last" (click)="nextPage()"><span>&rsaquo;</span></li>
                    <li *ngIf="!page.last" (click)="lastPage()"><span>&raquo;</span></li>
                </ul>
            </div>
        </div>`
})
export class PaginationComponent implements OnInit, OnChanges {

    @Input('page') page: Page<any>;
    @Input('config') customConfig: any;

    @Output('onPageChange') pageChange = new EventEmitter();

    pageInfo: PageInfo;

    pages: number[];

    config = {};

    ngOnInit(): void {
        let customConfig = this.customConfig || {};

        this.config['countOfPages'] = customConfig.countOfPages || 5;
    }

    ngOnChanges(changes: SimpleChanges): void {
        let currentPage = changes['page'].currentValue;
        let previousPage = changes['page'].previousValue;

        this.pageInfo = PaginationComponent.calculatePageInfo(currentPage);
        this.pages = PaginationComponent.calculatePages(currentPage, previousPage, this.pages, this.config);
    }

    firstPage(): void {
        if (this.page.first) return;

        this.emit(0);
    }

    lastPage(): void {
        if (this.page.last) return;

        this.emit(this.page.totalPages - 1);
    }

    nextPage(): void {
        if (this.page.last) return;

        this.emit(this.page.number + 1);
    }

    prevPage(): void {
        if (this.page.first) return;

        this.emit(this.page.number - 1);
    }

    numberPage(number: number): void {
        this.emit(number);
    }

    emit(page: number): void {
        let pageRequest = new PageRequest(page, this.page.size);
        this.pageChange.emit({ pageRequest: pageRequest });
    }

    private static calculatePageInfo(page: Page<any>): PageInfo {
        let from = PaginationComponent.startFrom(page.totalElements, page.size, page.number);
        let to = PaginationComponent.endWith(page.totalElements, from, page.numberOfElements);

        return new PageInfo(from, to, page.totalElements);
    }

    private static startFrom(totalRecords: number, size: number, page: number): number {
        return totalRecords ? size * page + 1 : 0;
    }

    private static endWith(totalRecords: number, from: number, numberOfElements: number): number {
        return totalRecords ? from + numberOfElements - 1 : 0;
    }

    private static calculatePages(current: Page<any>,
                                  previous: Page<any>,
                                  oldPages: number[] = [],
                                  config: any): number[] {
        previous = previous || current;

        let pages = oldPages.slice(0, oldPages.length);

        if (current.first) {
            return PaginationComponent.calculatePagesOnFirst(current, config.countOfPages);
        }

        if (current.last) {
            return PaginationComponent.calculatePagesOnLast(current, config.countOfPages);
        }

        if (current.number < previous.number && !pages.filter(page => page == current.number)) {
            return PaginationComponent.calculatePagesOnPrev(pages);
        }

        if (current.number > previous.number && !pages.filter(page => page == current.number)) {
            return PaginationComponent.calculatePagesOnNext(current, pages);
        }

        return pages;
    }

    private static calculatePagesOnFirst(page: Page<any>, countOfPages: number): number[] {
        let pages = [];

        for (let i = 0; i < countOfPages && i < page.totalPages; i++) pages.push(i);

        return pages;
    }

    private static calculatePagesOnLast(page: Page<any>, countOfPages: number): number[] {
        let pages = [];
        let lastPageNumber = page.totalPages - 1;

        for (let offset = 0; offset < countOfPages && offset < page.totalPages; offset++) {
            pages.push(lastPageNumber - offset);
        }

        return pages.reverse();
    }

    private static calculatePagesOnNext(page: Page<any>, oldPages: number[]): number[] {
        let maxPage = oldPages[oldPages.length - 1];

        oldPages.shift();

        if (maxPage < page.totalPages - 1) oldPages.push(maxPage + 1);

        return oldPages;
    }

    private static calculatePagesOnPrev(oldPages: number[]): number[] {
        let pages = [];
        let minPage = oldPages[0];

        oldPages.pop();

        if(minPage > 0) pages.push(minPage - 1, oldPages);

        return oldPages;
    }
}

class PageInfo {
    constructor(public from?: number, public to?: number, public total?: number) {};
}