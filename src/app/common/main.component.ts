import { Component } from '@angular/core';

@Component({
    selector: 'web-store-ui',
    template: `<h1>{{title}}</h1>`
})
export class MainComponent {
    title = 'Web store';
}