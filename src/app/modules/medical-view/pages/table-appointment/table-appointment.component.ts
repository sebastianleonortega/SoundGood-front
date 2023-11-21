import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-appointment',
  templateUrl: './table-appointment.component.html',
  styleUrls: ['./table-appointment.component.scss']
})
export class TableAppointmentComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
