import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './anonymous/registration/registration.component';

const routes: Routes = [
    { path: '',  redirectTo: '/', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class WebStoreRoutingModule {}
