import { Component } from '@angular/core';

import { RegistrationService } from './registration.service';

@Component({
    selector: 'web-store-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent {

    constructor(private registrationService: RegistrationService) {}
}