import {PageRequest} from "./page.request";

export interface OnPageChange {

    onPageChange(pageRequest: PageRequest): void;
}
