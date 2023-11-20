import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://localhost:8080/api/appointments/';


  constructor(private http: HttpClient) { }

  getAllAppointment() {
    return this.http.get(this.apiUrl);
  }
}
