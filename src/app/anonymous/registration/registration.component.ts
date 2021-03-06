import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { RegistrationService } from './registration.service';

@Component({
    selector: 'web-store-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent {

    registrationForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private registrationService: RegistrationService
    ) {
        this.createForm();
    }

    createForm() {
        this.registrationForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address: ['', Validators.required],
            phoneNumber: ['', Validators.required]
        });

        this.registrationForm.valueChanges
            .subscribe(
                (data) => console.log(data),
                (data) => console.log(data)
            );
    }

    onSubmit() {
        if (!this.registrationForm.valid) return;

        this.registrationService.registerCustomer(this.registrationForm.value);
    }
}