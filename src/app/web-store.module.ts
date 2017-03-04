import { NgModule }      from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { WebStoreRoutingModule } from './web-store-routing.module';

import { DashboardComponent } from './common/dashboard/dashboard.component';
import { SalesDashboardComponent } from './sales/dashboard/sales-dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CatalogComponent } from './common/catalog/catalog.component';
import { CategoryComponent } from './common/category/category.component';
import { CategoryService } from './common/category/category.service';

import { RegistrationComponent } from './anonymous/registration/registration.component';
import { RegistrationService } from './anonymous/registration/registration.service';
import { LoginComponent } from './anonymous/login/login.component';
import { SalesComponent } from "./sales/sales.component";
import { SalesCategoryComponent } from "./sales/category/sales-category.component";
import { SalesProductComponent } from "./sales/product/sales-product.component";
import { SalesProductCatalogComponent } from "./sales/product/catalog/sales-product-catalog.component";
import { ProductService } from "./common/product/product.service";
import {SalesProductAddComponent} from "./sales/product/new/sales-product-add.component";

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
        CatalogComponent,
        CategoryComponent,
        SalesComponent,
        SalesDashboardComponent,
        SalesProductComponent,
        SalesProductCatalogComponent,
        SalesCategoryComponent,
        SalesProductAddComponent,
    ],
    providers: [
        RegistrationService,
        CategoryService,
        ProductService
    ],
    bootstrap: [
        DashboardComponent
    ]
})
export class WebStoreModule { }