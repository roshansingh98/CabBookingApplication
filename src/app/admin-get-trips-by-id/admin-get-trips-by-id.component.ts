import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripBooking } from '../model/tripbooking';
import { AdminService } from '../service/adminservice';

@Component({
  selector: 'app-admin-get-trips-by-id',
  templateUrl: './admin-get-trips-by-id.component.html',
  styleUrls: ['./admin-get-trips-by-id.component.css']
})
export class AdminGetTripsByIdComponent {

  constructor(private adminService:AdminService){}

  trips:any

  findTrip(form:any){

    let observable =  this.adminService.findTripsByCustomerId(form.value.customerId);

    observable.subscribe(
      (dtas) => console.log(dtas),
      err=>console.log("err is "+err.message)
    ); 

  }

}
