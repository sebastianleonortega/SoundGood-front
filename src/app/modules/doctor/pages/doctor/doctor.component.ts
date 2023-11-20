import { Component, OnInit } from '@angular/core';
import {Doctor} from "../../../auth/interface/home.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../../../core/services/alert.service";
import {DoctorService} from "../service/doctor.service";
import { LocalTime } from 'js-joda';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  public scheduleAppointment: FormGroup = new FormGroup({});


  constructor(
    private _doctor:DoctorService,
      private _alert: AlertService,
  ) { }

  doctors : Doctor[] = [
    {
      id: 1,
      name: 'Mario Alejandro',
      lastname: 'Contreras Gutierrez',
      specialty: 'Terapeuta complementario, Médico general',
      img: 'assets/images/doc1.png',
      address: 'Calle 12 N°. 16-30 Edificio Santa Maria Local 1, Ocaña',
      openingHours: '8:00 - 12:00 & 2:00 - 6:00 de lunes a viernes',
      experience: [
        {

          experienceName: 'Acupuntura'
        },
        {
          experienceName: 'Terapia Neuronal'
        }
      ]
    }
    ]

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.initScheduleAppointment();
  }

  initScheduleAppointment(): void {
    this.scheduleAppointment = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      specialty: new FormControl('', [Validators.required]),
    });

  }

  sendScheduleAppointment(){
    if (this.scheduleAppointment.valid) {
      const selectedTime: string = this.scheduleAppointment.get('time')?.value;

      // Asegúrate de que la cadena de tiempo tenga dos dígitos para las horas y minutos
      const [hours, minutes] = selectedTime.split(':');
      const formattedTime: string = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;

      const localTime: LocalTime = LocalTime.parse(formattedTime);

      const data: any = {
        date: this.scheduleAppointment.get('date')?.value,
        specialty: this.scheduleAppointment.get('specialty')?.value,
        address: "kdx 418 - 140",
        user: { id: 1 },
        doctor: { id: 1 },
        time: localTime,
      };

      console.log(data);

      this._doctor.createAppointment(data).subscribe({
        next: () => {
          this._alert.success("Cita registrada");
          this.scheduleAppointment.reset();
          window.scrollTo(0, 0);
        }
      });
    }

  }

}
