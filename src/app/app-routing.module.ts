import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AdminGetTripsByIdComponent } from './admin-get-trips-by-id/admin-get-trips-by-id.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { GetTripsCabWiseComponent } from './get-trips-cab-wise/get-trips-cab-wise.component';
import { GetTripsCustomerWiseComponent } from './get-trips-customer-wise/get-trips-customer-wise.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';

const routes: Routes = [
  {
    path: "admin-add",
    component: AddAdminComponent
  },
  {
    path: "admin-update",
    component: UpdateAdminComponent
  },
  {
    path: "admin-delete",
    component: DeleteAdminComponent
  },
  {
    path: "customer-add",
    component: AddCustomerComponent
  },
  {
    path: "getAllTripsByCustomerId",
    component: AdminGetTripsByIdComponent
  },
  {
    path: "getAllTripsByCustomer",
    component: GetTripsCustomerWiseComponent
  },
  {
    path: "getAllTripsByCab",
    component: GetTripsCabWiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
