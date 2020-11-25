import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddAdmin } from '../model/adminAdd';
import { FetchAdmin } from '../model/adminFetch';
import { AdminService } from '../service/adminservice';

@Component({
  selector: 'update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent {

  constructor(private adminService:AdminService) {}

  admin: AddAdmin | undefined;
  fetchadmin:FetchAdmin | undefined;

  updateAdmin(myform:any){
    let data = myform.value;

    this.fetchadmin = new FetchAdmin(data.adminid , data.username , data.password, data.mobileNumber, data.email);
    let observable:Observable<FetchAdmin> =  this.adminService.updateAdmin(this.fetchadmin);

    observable.subscribe(
      (addAdmin:AddAdmin)=>this.fetchadmin=addAdmin,
      err => console.log("Error is " + err.message)
    );
  }


}
