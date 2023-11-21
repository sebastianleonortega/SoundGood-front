import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../../../core/services/alert.service";
import {MatDialog} from "@angular/material/dialog";
import {AppointmentService} from "../../service/appointment.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  private idUser: number = 1;
  citas: any;
  private doctorCita: any;
   noDate: boolean= false;

  constructor(
    private _alert: AlertService,
    public dialog: MatDialog,
    private _appoint: AppointmentService,
  ) {
  }

  ngOnInit(): void {
    this.getAllAppointment();
  }

  cancelAppointment() {
    this._alert.success('Cita cancelada ')
  }

  getAllAppointment() {
    this._appoint.getAllAppointment().subscribe({
      next: (data) => {
        this.citas = data;
        if (this.citas === ''){
          this.noDate = true;
        }
        console.log(data)
      }
    })



  }

  close(): void {
    this.dialog.closeAll();
  }

  deleteAppointment(value: string){
    const index = this.citas.indexOf(value)
    if (index !== -1){
      let id = this.citas[index].id;

      this._appoint.deleteAppointment(id).subscribe({
        next : () =>{
          this.citas.splice(index, 1)
          this._alert.success("Cita cancelada correctamente");
        }
      })
    }

    }


}
