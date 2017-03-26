import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RegistrationData } from './registration.data';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistrationService {

    constructor(private http: Http) {}

    registerCustomer(registrationData: RegistrationData) : Observable<any> {
        return this.http.post('/api/registration', registrationData);
    }
}