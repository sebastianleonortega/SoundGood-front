import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:8080/api/test-audition';

  constructor(private http: HttpClient) {
  }


  public startTest():Observable<any>{
    return this.http.get(this.apiUrl+"/start");
  }

  public submitResults(inputNumbers: string):Observable<any>{
    return this.http.post(this.apiUrl+"/start", inputNumbers);
  }

  getAudio() {
    return this.http.get(this.apiUrl+"/audio", { responseType: 'arraybuffer' });
  }


}
