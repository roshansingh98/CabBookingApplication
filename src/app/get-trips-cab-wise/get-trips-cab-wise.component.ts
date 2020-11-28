import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripBooking } from '../model/tripbooking';
import { AdminService } from '../service/adminservice';

@Component({
  selector: 'app-get-trips-cab-wise',
  templateUrl: './get-trips-cab-wise.component.html',
  styleUrls: ['./get-trips-cab-wise.component.css']
})
export class GetTripsCabWiseComponent {

  tripBookings:any;

  constructor(private service:AdminService){
    let response:Observable<TripBooking[]> = this.service.findTripsCabWise();
    response.subscribe(
      (data) => this.tripBookings = data,
      err=>alert("There is no item with this customer Id")
    );
  }

}
