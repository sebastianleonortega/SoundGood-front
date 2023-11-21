import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalViewComponent } from './pages/medical-view/medical-view.component';
import {MedicalViewRoutingModule} from "./medical-view-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { DocumentsComponent } from './pages/documents/documents.component';
import { GraphUserComponent } from './pages/graph-user/graph-user.component';
import { TableUserComponent } from './pages/table-user/table-user.component';
import { TableAppointmentComponent } from './pages/table-appointment/table-appointment.component';



@NgModule({
  declarations: [
    MedicalViewComponent,
    DocumentsComponent,
    GraphUserComponent,
    TableUserComponent,
    TableAppointmentComponent,


  ],
  imports: [
    CommonModule,
    MedicalViewRoutingModule,
    SharedModule,
  ]
})
export class MedicalViewModule { }
