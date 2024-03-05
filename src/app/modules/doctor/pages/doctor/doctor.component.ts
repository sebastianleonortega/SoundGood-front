import {Component, OnInit} from '@angular/core';
import {DoctorRes} from "../../../auth/interface/home.interface";
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

  address: string = '';
  id: number = 0;
  lastName: string = '';
  name: string = '';
  speciality: string = '';
  image: string = '';

  dateNow: Date = new Date();


  doctors: DoctorRes = {
    address: '',
    id: 0,
    lastName: '',
    name: '',
    speciality:'',
    image: '',
  };

  constructor(
    private _doctor: DoctorService,
    private _alert: AlertService,
    private route: ActivatedRoute
  ) {
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
        error: () => {
          this._alert.warning("Ya existe una cita registrada en esta fecha y hora");
        }, next: (error) =>{
          window.scrollTo(0, 0);
          this.scheduleAppointment.reset();
          this._alert.success("Cita registrada");
        }
      });
    }

  }

  getDoctorById() {
    this._doctor.getDoctorById(this.doctorId).subscribe({
      next: (data) => {
        this.doctors = data;
        // console.log(data)



        this.address = data.address;
        this.lastName= data.lastName;
        this.name= data.name;
        this.speciality= data.speciality;
        this.image= data.image;
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
