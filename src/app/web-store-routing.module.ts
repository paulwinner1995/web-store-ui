import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './anonymous/registration/registration.component';
import { LoginComponent } from './anonymous/login/login.component';
import { CatalogComponent } from './common/catalog/catalog.component';

import { AdminDashboardComponent } from "./admin/dashboard/admin-dashboard.component";
import { AdminCategoryComponent } from "./admin/category/admin-category.component";
import { AdminCategoryOverviewComponent } from "./admin/category/overview/admin-category-overview.component";
import { AdminCategoryAddComponent } from "./admin/category/new/admin-category-add.component";
import { AdminProductComponent } from "./admin/product/admin-product.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminProductCatalogComponent } from "./admin/product/catalog/admin-product-catalog.component";
import { AdminProductAddComponent } from "./admin/product/new/admin-product-add.component";

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'catalog', component: CatalogComponent},
    {
        path: 'admin', component: AdminComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: AdminDashboardComponent},
            {
                path: 'category', component: AdminCategoryComponent,
                children: [
                    {path: '', redirectTo: 'overview', pathMatch: 'full'},
                    {path: 'overview', component: AdminCategoryOverviewComponent},
                    {path: 'add', component: AdminCategoryAddComponent}
                ]
            },
            {
                path: 'product', component: AdminProductComponent,
                children: [
                    {path: '', redirectTo: 'catalog', pathMatch: 'full'},
                    {path: 'catalog', component: AdminProductCatalogComponent},
                    {path: 'add', component: AdminProductAddComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class WebStoreRoutingModule {
}
