import { Component, OnInit } from '@angular/core';
import { AddAdmin } from '../model/adminAdd';
import { FetchAdmin } from '../model/adminFetch';
import { AdminService } from '../service/adminservice';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent {

  constructor(private service:AdminService) { }

  admin:AddAdmin = new AddAdmin("", "", "", "");

  deleteAdmin(form:any){
    let data = form.value;
    let id = data.adminid;

    console.log(id);

    let val = this.service.deleteAdmin(id);

    val.subscribe((data:any)=>this.admin=data);
  }

}
