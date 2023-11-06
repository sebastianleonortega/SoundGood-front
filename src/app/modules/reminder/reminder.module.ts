import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderComponent } from './pages/reminder/reminder.component';
import {SharedModule} from "../../shared/shared.module";
import {ReminderRoutingModule} from "./reminder-routing.module";



@NgModule({
  declarations: [
    ReminderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReminderRoutingModule
  ]
})
export class ReminderModule { }
