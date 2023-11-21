import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private apiUrl = 'http://localhost:8080/api/medication-reminders';


  constructor(private http: HttpClient) { }


  getAllReminder() {
    return this.http.get(this.apiUrl);
  }

  public createReminder(data: any):Observable<any>{
    return this.http.post(this.apiUrl, data);
  }

  deleteReminder(id: any){
    return this.http.delete(this.apiUrl+"/"+id)
  }
}
