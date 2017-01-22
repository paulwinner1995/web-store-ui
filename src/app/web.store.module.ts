import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebStoreRoutingModule } from './web-store-routing.module';

import { MainComponent } from './common/main.component';

@NgModule({
    imports: [
        BrowserModule,
        WebStoreRoutingModule
    ],
    declarations: [
        MainComponent
    ],
    bootstrap: [
        MainComponent
    ]
})
export class WebStoreModule { }