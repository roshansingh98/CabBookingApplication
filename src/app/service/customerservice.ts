import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable()
export class CustomerService{

    constructor(private client:HttpClient){}

    baseUrl = "http://localhost:8585/customer";

    addCustomer(customer:Customer):Observable<Customer>{
        const url = this.baseUrl + "/add";
        let observable:Observable<Customer> = this.client.post<Customer>(url,customer);
        return observable;
    }

}