import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import {SharedModule} from "../../shared/shared.module";
import {AppointmentRoutingModule} from "./appointment-routing.module";



@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
