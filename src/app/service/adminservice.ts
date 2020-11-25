import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddAdmin } from '../model/adminAdd';
import { FetchAdmin } from '../model/adminFetch';

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

}