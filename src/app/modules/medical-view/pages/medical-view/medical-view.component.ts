import {Component, OnInit} from '@angular/core';
import {DocumentsComponent} from "../documents/documents.component";
import {MatDialog} from "@angular/material/dialog";
import {GraphUserComponent} from "../graph-user/graph-user.component";
import {TableUserComponent} from "../table-user/table-user.component";
import {TableAppointmentComponent} from "../table-appointment/table-appointment.component";
import {TestNumericService} from "../../../test/service/test-numeric.service";
import {AppService} from "../../../../app.service";

@Component({
  selector: 'app-medical-view',
  templateUrl: './medical-view.component.html',
  styleUrls: ['./medical-view.component.scss']
})
export class MedicalViewComponent implements OnInit {
  patientsData: Patient[] = [
    {
      name: 'Sebastian',
      lastName: 'Leon',
      email: 'correo1@ejemplo.com',
      password: 'contrasenaSegura1',
      typeOfHearingLoss: 'Tipo de pérdida de audición 1',
      previousTreatments: 'Tratamientos previos 1',
    },
    {
      name: 'Usuario',
      lastName: 'Ejemplo',
      email: 'correo2@ejemplo.com',
      password: 'contrasenaSegura2',
      typeOfHearingLoss: 'Tipo de pérdida de audición 2',
      previousTreatments: 'Tratamientos previos 2',
    },
    // Agrega más pacientes si es necesario
  ];

  public appointments: any[] = [
    {
      id: 10,
      date: '2023-11-09',
      time: '10:00:00',
      speciality: null,
      address: 'kdx 418 - 140',
      user: {
        id: 1,
        name: 'Sebastian',
        lastName: 'Leon',
        email: 'correo@ejemplo.com',
        password: 'contrasenaSegura',
        typeOfHearingLoss: 'Tipo de pérdida de audición',
        previousTreatments: 'Tratamientos previos'
      },
      doctor: {
        id: 1,
        name: 'Ruben ',
        lastName: 'Restrepo Zalazar',
        speciality: 'Otorrinolaringólogo',
        address: 'DireccionDoctor'
      }
    }
    // Agrega más citas simuladas si lo necesitas
  ];

  constructor(
    private _dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {




  }

  openModalDocument() {
    const data = 1;
    this._dialog.open(DocumentsComponent, {
      data: data,
      width: '500px',
      height: '500px'
    })
  }

  openModalUser() {
    this._dialog.open(TableUserComponent, {
      width: '500px',
      height: '500px'
    })
  }

  openModalAppointment() {
    this._dialog.open(TableAppointmentComponent, {
      width: '500px',
      height: '500px'
    })
  }

  openModalTesResul() {
    this._dialog.open(GraphUserComponent, {
      width: '800px',
      height: '600px'
    })
  }

}

interface Patient {
  name: string;
  lastName: string;
  email: string;
  password: string;
  typeOfHearingLoss: string;
  previousTreatments: string;
}
