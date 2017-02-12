import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RegistrationData} from './registration.data';

@Injectable()
export class RegistrationService {

    constructor(private http: Http) {}

    registerCustomer(registrationData: RegistrationData) {
        this.http
            .post('/registration', registrationData)
            .subscribe();
    }
}