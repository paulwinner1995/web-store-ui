import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './anonymous/registration/registration.component';
import { LoginComponent } from './anonymous/login/login.component';
import { CatalogComponent } from './common/catalog/catalog.component';

const routes: Routes = [
    { path: '',  redirectTo: '/', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'catalog', component: CatalogComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class WebStoreRoutingModule {}
