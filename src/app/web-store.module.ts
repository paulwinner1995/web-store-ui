import { NgModule }      from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';

import { WebStoreRoutingModule } from './web-store-routing.module';

import { DashboardComponent } from './common/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';

import { RegistrationComponent } from './anonymous/registration/registration.component';
import { RegistrationService } from './anonymous/registration/registration.service';
import { LoginComponent } from './anonymous/login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        Http,
        ReactiveFormsModule,
        WebStoreRoutingModule
    ],
    declarations: [
        DashboardComponent,
        HeaderComponent,
        RegistrationComponent,
        LoginComponent
    ],
    providers: [
        RegistrationService
    ],
    bootstrap: [
        DashboardComponent
    ]
})
export class WebStoreModule { }