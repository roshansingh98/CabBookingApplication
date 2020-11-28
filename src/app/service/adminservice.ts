import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddAdmin } from '../model/adminAdd';
import { FetchAdmin } from '../model/adminFetch';
import { TripBooking } from '../model/tripbooking';

@Injectable()
export class AdminService{

    constructor(private http:HttpClient){}

    baseURL = "http://localhost:8585/admin"
    

    addAdmin(admin:AddAdmin):Observable<FetchAdmin>{  
        const url = this.baseURL + "/add";
        let observable:Observable<FetchAdmin> = this.http.post<FetchAdmin>(url,admin);
        return observable;              
    }

    updateAdmin(admin:FetchAdmin):Observable<FetchAdmin>{
        let id = admin.id;

        const url = this.baseURL + "/update/" + id;

        let observable:Observable<FetchAdmin> = this.http.put<FetchAdmin>(url,admin);
        return observable;
    }

    deleteAdmin(id:number){
        const url = this.baseURL + "/delete/" + id;

        return this.http.delete(url);
    }

    findTripsByCustomerId(id:number){
        const url = this.baseURL + "/retrieve/tripsBooking/" + id;

        let resp = this.http.get(url);
        return resp;
    }

    findTripsCustomerWise():Observable<TripBooking[]>{
        const url = this.baseURL + "/retrieve/getTripsCustomerwise";

        let response:Observable<TripBooking[]> = this.http.get<TripBooking[]>(url);
        return response;
    }

}