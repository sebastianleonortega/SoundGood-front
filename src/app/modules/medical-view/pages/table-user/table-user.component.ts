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
      email: 'jsleono@ufpso.edu.co',
      password: 'contrasenaSegura1',
      typeOfHearingLoss: 'Conductiva',
      previousTreatments: 'Extracción de tapones de cerumen',
    },
    {
      name: 'Diany',
      lastName: 'Garcia Carrascal',
      email: 'digarcia@ufpso.edu.co',
      password: 'contrasenaSegura2',
      typeOfHearingLoss: 'Mixta',
      previousTreatments: 'Cirugía radical de oído',
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
