import { Component, OnInit } from '@angular/core';
import {AppointmentInterface} from "../../interfaces/appointment.interface";
import {AlertService} from "../../../../core/services/alert.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  citas: AppointmentInterface[]= [
    {
      "date": "2023-12-15",
      "specialty": "Medico general",
      "doctor": "Dr. Juan Leon",
      "time": "10:00 AM"
    },
    {
      "date": "2023-12-20",
      "specialty": "otorrinolaringologo",
      "doctor": "Dr. Mary Smith",
      "time": "2:30 PM"
    },
    {
      "date": "2023-12-20",
      "specialty": "otorrinolaringologo",
      "doctor": "Dr. Mary Smith",
      "time": "2:30 PM"
    },
    {
      "date": "2023-12-20",
      "specialty": "otorrinolaringologo",
      "doctor": "Dr. Mary Smith",
      "time": "2:30 PM"
    },
    {
      "date": "2023-12-20",
      "specialty": "otorrinolaringologo",
      "doctor": "Dr. Mary Smith",
      "time": "2:30 PM"
    }
  ];
  constructor(
    private _alert : AlertService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  cancelAppointment(){
    this._alert.success('Cita cancelada ')
  }

  close(): void {
    this.dialog.closeAll();
  }

}
