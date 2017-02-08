import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

import {RegistrationService} from './registration.service';

@Component({
    selector: 'web-store-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent {

    profileForm: FormGroup;
    accountForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private registrationService: RegistrationService) {}
}