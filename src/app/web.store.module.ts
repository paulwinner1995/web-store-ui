import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './common/main.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MainComponent
    ],
    bootstrap: [
        MainComponent
    ]
})
export class WebStoreModule { }