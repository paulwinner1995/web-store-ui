import { NgModule }      from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { WebStoreRoutingModule } from './web-store-routing.module';

import { DashboardComponent } from './common/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CatalogComponent } from './common/catalog/catalog.component';

import { RegistrationComponent } from './anonymous/registration/registration.component';
import { RegistrationService } from './anonymous/registration/registration.service';
import { LoginComponent } from './anonymous/login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        WebStoreRoutingModule
    ],
    declarations: [
        DashboardComponent,
        HeaderComponent,
        FooterComponent,
        RegistrationComponent,
        LoginComponent,
        CatalogComponent
    ],
    providers: [
        RegistrationService
    ],
    bootstrap: [
        DashboardComponent
    ]
})
export class WebStoreModule { }