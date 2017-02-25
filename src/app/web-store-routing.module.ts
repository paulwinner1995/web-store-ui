import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './anonymous/registration/registration.component';
import { LoginComponent } from './anonymous/login/login.component';
import { CatalogComponent } from './common/catalog/catalog.component';
import { SalesComponent } from "./sales/sales.component";
import { SalesDashboardComponent } from "./sales/dashboard/sales-dashboard.component";

const routes: Routes = [
    { path: '',  redirectTo: '/', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'sales', component: SalesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', component: SalesDashboardComponent },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class WebStoreRoutingModule {}
