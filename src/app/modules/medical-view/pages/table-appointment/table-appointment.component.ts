import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../../../appointment/service/appointment.service";

@Component({
  selector: 'app-table-appointment',
  templateUrl: './table-appointment.component.html',
  styleUrls: ['./table-appointment.component.scss']
})
export class TableAppointmentComponent implements OnInit {

  public appointments: any;

  constructor(
    private _appoint: AppointmentService,

  ) { }

  ngOnInit(): void {
    this.getAllAppointment();
  }

  getAllAppointment() {
    this._appoint.getAllAppointment().subscribe({
      next: (data) => {
        this.appointments = data;

      }
    })



  }

}
