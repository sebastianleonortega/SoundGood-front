import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:8080/api/appointments';

  constructor(private http: HttpClient) { }

  public createAppointment(data: any):Observable<any>{
    return this.http.post(this.apiUrl, data);
  }
}
