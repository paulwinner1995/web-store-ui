import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './anonymous/registration/registration.component';
import { LoginComponent } from './anonymous/login/login.component';
import { CatalogComponent } from './common/catalog/catalog.component';

import { SalesComponent } from "./sales/sales.component";
import { SalesDashboardComponent } from "./sales/dashboard/sales-dashboard.component";
import { SalesCategoryComponent } from "./sales/category/sales-category.component";
import { SalesProductComponent } from "./sales/product/sales-product.component";
import { SalesProductCatalogComponent } from "./sales/product/catalog/sales-product-catalog.component";
import {SalesProductAddComponent} from "./sales/product/new/sales-product-add.component";
import {SalesCategoryOverviewComponent} from "./sales/category/overview/sales-category-overview.component";
import {SalesCategoryAddComponent} from "./sales/category/new/sales-category-add.component";

const routes: Routes = [
    { path: '',  redirectTo: '/', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'sales', component: SalesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', component: SalesDashboardComponent },
            { path: 'category', component: SalesCategoryComponent,
                children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full'},
                    { path: 'overview', component: SalesCategoryOverviewComponent },
                    { path: 'add', component: SalesCategoryAddComponent }
                ]
            },
            { path: 'product', component: SalesProductComponent,
                children: [
                    { path: '', redirectTo: 'catalog', pathMatch: 'full'},
                    { path: 'catalog', component: SalesProductCatalogComponent },
                    { path: 'add', component: SalesProductAddComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class WebStoreRoutingModule {}
