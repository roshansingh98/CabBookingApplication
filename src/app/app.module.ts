import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './service/adminservice';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { AddCustomerComponent } from './add-customer/add-customer.component'
import { CustomerService } from './service/customerservice';

@NgModule({
  declarations: [
    AppComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    DeleteAdminComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminService , CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
