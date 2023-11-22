import {Component, OnInit} from '@angular/core';
import {Doctor, DoctorResponse} from "../../../auth/interface/home.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../../../core/services/alert.service";
import {DoctorService} from "../service/doctor.service";
import {LocalTime} from 'js-joda';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  public scheduleAppointment: FormGroup = new FormGroup({});

  doctorId: any;
  openingHours: string = '8:00 - 12:00 & 2:00 - 6:00 de lunes a viernes';


  doctors: DoctorResponse[] = [
    {
      id: 0,
      name: '',
      lastname: '',
      specialty: '',
      image: '',
      address: '',
    }
  ];

  constructor(
    private _doctor: DoctorService,
    private _alert: AlertService,
    private route: ActivatedRoute
  ) {
  }

  doctors2: Doctor[] = [
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

  doctorss: Doctor[] = [
    {
      id: 1,
      name: 'Mario Alejandro',
      lastname: 'Contreras Gutierrez',
      specialty: 'Terapeuta complementario, Médico general',
      img: 'assets/images/doc1.png',
      openingHours: '8:00 - 12:00 & 2:00 - 6:00 de lunes a viernes',
      address: '',
      experience: [
        {

          experienceName: 'Acupuntura'
        },
        {
          experienceName: 'Terapia Neuronal'
        }
      ]
    },
    {
      id: 2,
      name: 'Sandrith Tatiana',
      lastname: 'Guerrero Rincon',
      specialty: 'Otorrinolaringologo',
      img: 'assets/images/doc2.png',
      openingHours: '8:00 - 12:00 & 2:00 - 6:00 de lunes a viernes',
      address: '',
      experience: [
        {
          experienceName: 'Acupuntura'
        },
        {
          experienceName: 'Terapia Neuronal'
        }
      ]
    },
    {
      id: 3,
      name: 'Edgardo Enrique',
      lastname: 'Paba Gonzalez',
      specialty: 'Médico general',
      img: 'assets/images/doc3.png',
      address: '',
      openingHours: '8:00 - 12:00 & 2:00 - 6:00 de lunes a viernes',
      experience: [
        {

          experienceName: 'Acupuntura'
        },
        {
          experienceName: 'Terapia Neuronal'
        }
      ]
    },
    {
      id: 4,
      name: 'Mildreth Amanda',
      lastname: 'Carrascal Torrado',
      specialty: 'Médico general',
      img: 'assets/images/doc4.png',
      address: '',
      openingHours: '8:00 - 12:00 & 2:00 - 6:00 de lunes a viernes',
      experience: [
        {

          experienceName: 'Acupuntura'
        },
        {
          experienceName: 'Terapia Neuronal'
        }
      ]
    },
    {
      id: 5,
      name: 'Juan Carlos',
      lastname: 'Jimenez Illera',
      specialty: 'Médico general',
      img: 'assets/images/doc5.png',
      address: '',
      openingHours: '8:00 - 12:00 & 2:00 - 6:00 de lunes a viernes',
      experience: [
        {

          experienceName: 'Acupuntura'
        },
        {
          experienceName: 'Terapia Neuronal'
        }
      ]
    },
  ]


  showDoctor() {
    if (this.doctorId === 1) {

    }
  }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.initScheduleAppointment();
    this.idDoctor();
    this.getDoctorById();
  }

  idDoctor() {
    this.route.paramMap.subscribe(params => {
      this.doctorId = params.get('id');
    });
  }


  initScheduleAppointment(): void {
    this.scheduleAppointment = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      specialty: new FormControl('', [Validators.required]),
    });

  }

  sendScheduleAppointment() {
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
        user: {id: 1},
        doctor: {id: 1},
        time: localTime,
      };


      this._doctor.createAppointment(data).subscribe({
        next: () => {
          this._alert.success("Cita registrada");
          this.scheduleAppointment.reset();
          window.scrollTo(0, 0);
        }
      });
    }

  }

  getDoctorById() {
    this._doctor.getDoctorById(this.doctorId).subscribe({
      next: (data) => {
        this.doctors = data;
        console.log(data)
      }
    })
  }

  public convertBase64ToFile(base64: string, fileName: string, mime: string = 'image/png'): File {
    const base64Split: string[] = base64.split(',');
    const baseSubString = atob(base64Split[1]);
    let base64Length = baseSubString.length;
    let uint8Array = new Uint8Array(base64Length);
    while (base64Length--) {
      uint8Array[base64Length] = baseSubString.charCodeAt(base64Length);
    }
    return new File([uint8Array], fileName, {type: mime});
  }

}
