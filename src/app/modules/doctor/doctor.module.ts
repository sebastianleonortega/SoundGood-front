import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {DoctorComponent} from "./pages/doctor/doctor.component";
import {DoctorRoutingModule} from "./doctor-routing.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
      DoctorComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        DoctorRoutingModule,
        MatIconModule
    ]
})
export class DoctorModule { }
