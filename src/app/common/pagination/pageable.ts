import {PageRequest} from "./page.request";

export interface IPageable {

    onPageChange(pageRequest: PageRequest): void;
}
