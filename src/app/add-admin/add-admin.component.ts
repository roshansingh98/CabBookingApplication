import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddAdmin } from '../model/adminAdd';
import { FetchAdmin } from '../model/adminFetch';
import { AdminService } from '../service/adminservice';

@Component({
  selector: 'add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {

  // admin = new Admin("Roshan" , "123456", "232323" , "roshan@gmail.com");

  constructor(private adminService:AdminService){} 

  admin: AddAdmin | undefined;
  fetchadmin:FetchAdmin | undefined;
  addAdmin(myform:any){
    let data = myform.value;
    this.admin = new AddAdmin(data.username , data.password, data.mobileNumber, data.email);
    let observable:Observable<FetchAdmin> =  this.adminService.addAdmin(this.admin);
    observable.subscribe(
      (addAdmin:AddAdmin)=>this.fetchadmin=addAdmin,
      err => console.log("Error is " + err.message)
    );

    console.log("Received: " + data.username + data.email + this.fetchadmin?.id);
    myform.reset();
  }

}
