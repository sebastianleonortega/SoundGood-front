import {Component, OnInit} from '@angular/core';
import {AppointmentInterface} from "../../interfaces/appointment.interface";
import {AlertService} from "../../../../core/services/alert.service";
import {MatDialog} from "@angular/material/dialog";
import {AppointmentService} from "../service/appointment.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  citas1: AppointmentInterface[] = [
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
  private idUser: number = 1;
  citas: any;
  private doctorCita: any;

  constructor(
    private _alert: AlertService,
    public dialog: MatDialog,
    private _appoint: AppointmentService,
  ) {
  }

  ngOnInit(): void {
    this.getAllAppointment();
    console.log(this.citas1)
  }

  cancelAppointment() {
    this._alert.success('Cita cancelada ')
  }

  getAllAppointment() {
    this._appoint.getAllAppointment().subscribe({
      next: (data) => {
        this.citas = data;

        console.log(data)
      }
    })


  }

  close(): void {
    this.dialog.closeAll();
  }

}
