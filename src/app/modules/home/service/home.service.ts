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

  public submitResults(inputNumbers: boolean):Observable<any>{
    return this.http.post(this.apiUrl+"/start", inputNumbers);
  }

  getAudio(): Observable<Blob> {
    const audioUrl = this.apiUrl + '/audio';

    const headers = new HttpHeaders({
      'Content-Type': 'audio/mpeg',
    });

    return this.http.get(audioUrl, { headers, responseType: 'blob' });
  }


}
