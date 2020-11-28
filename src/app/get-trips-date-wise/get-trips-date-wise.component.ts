import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripBooking } from '../model/tripbooking';
import { AdminService } from '../service/adminservice';

@Component({
  selector: 'app-get-trips-date-wise',
  templateUrl: './get-trips-date-wise.component.html',
  styleUrls: ['./get-trips-date-wise.component.css']
})
export class GetTripsDateWiseComponent {

  tripBookings:any;

  constructor(private service:AdminService){
    let response:Observable<TripBooking[]> = this.service.findTripsDateWise();
    response.subscribe(
      (data) => this.tripBookings = data,
      err=>alert("There is no item with this customer Id")
    );
  }

}
