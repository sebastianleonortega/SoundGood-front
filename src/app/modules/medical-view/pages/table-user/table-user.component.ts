import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
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
