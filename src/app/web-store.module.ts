import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebStoreRoutingModule } from './web-store-routing.module';

import { DashboardComponent } from './common/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';

import { RegistrationComponent } from './anonymous/registration/registration.component';

@NgModule({
    imports: [
        BrowserModule,
        WebStoreRoutingModule
    ],
    declarations: [
        DashboardComponent,
        HeaderComponent,
        RegistrationComponent
    ],
    bootstrap: [
        DashboardComponent
    ]
})
export class WebStoreModule { }