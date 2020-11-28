import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripBooking } from '../model/tripbooking';
import { AdminService } from '../service/adminservice';

@Component({
  selector: 'app-get-trips-customer-wise',
  templateUrl: './get-trips-customer-wise.component.html',
  styleUrls: ['./get-trips-customer-wise.component.css']
})
export class GetTripsCustomerWiseComponent {

  tripBookings:any;

  constructor(private service:AdminService){
    let response:Observable<TripBooking[]> = this.service.findTripsCustomerWise();
    response.subscribe(
      (data) => this.tripBookings = data,
      err=>alert("There is no item with this customer Id")
    );
  }


}
