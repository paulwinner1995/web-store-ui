import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebStoreRoutingModule } from './web-store-routing.module';

import { DashboardComponent } from './common/dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        WebStoreRoutingModule
    ],
    declarations: [
        DashboardComponent
    ],
    bootstrap: [
        DashboardComponent
    ]
})
export class WebStoreModule { }