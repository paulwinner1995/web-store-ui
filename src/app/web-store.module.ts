import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { WebStoreRoutingModule } from './web-store-routing.module';

import { DashboardComponent } from './common/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CatalogComponent } from './common/catalog/catalog.component';
import { CategoryComponent } from './common/category/category.component';
import { CategoryService } from './common/category/category.service';

import { RegistrationComponent } from './anonymous/registration/registration.component';
import { RegistrationService } from './anonymous/registration/registration.service';
import { LoginComponent } from './anonymous/login/login.component';
import { AdminCategoryComponent } from "./admin/category/admin-category.component";
import { ProductService } from "./common/product/product.service";
import { AdminCategoryOverviewComponent } from "./admin/category/overview/admin-category-overview.component";
import { AdminCategoryAddComponent } from "./admin/category/new/admin-category-add.component";
import { AdminProductComponent } from "./admin/product/admin-product.component";
import { AdminProductCatalogComponent } from "./admin/product/catalog/admin-product-catalog.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminProductAddComponent } from "./admin/product/new/admin-product-add.component";
import { PaginationComponent } from "./common/pagination/pagination.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        NguiAutoCompleteModule,
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
        AdminComponent,
        AdminDashboardComponent,
        AdminProductComponent,
        AdminProductCatalogComponent,
        AdminCategoryComponent,
        AdminCategoryOverviewComponent,
        AdminCategoryAddComponent,
        AdminProductAddComponent,
        PaginationComponent
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
export class WebStoreModule {
}