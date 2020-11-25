import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customerservice';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  constructor(private service:CustomerService) { }

  customer:Customer | undefined;
  
  addCustomer(form:any){
    let data = form.value;
    this.customer = new Customer(data.username , data.password, data.mobileNumber, data.email);

    let observable:Observable<Customer> =  this.service.addCustomer(this.customer);
    observable.subscribe(
      (addCustomer:Customer)=>this.customer=addCustomer,
      err => console.log("Error is " + err.message)
    );
  }

}
