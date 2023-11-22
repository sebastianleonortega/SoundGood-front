import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestNumericService {

  private apiUrl = 'http://localhost:8080/api/test-audition';


  constructor(private http: HttpClient) {
  }

  public submitResults(data: string): Observable<any> {
    return this.http.post(this.apiUrl + "/submit-results", data);
  }

  getAudio(id: number) {
    return this.http.get(this.apiUrl + "/audio/" + id, {responseType: 'arraybuffer'});
  }

  public deleteSubmitResults(): Observable<any> {
    return this.http.get(this.apiUrl + "/reset-correct-answers-count");
  }

  getResult() {
    return this.http.get(this.apiUrl + "/correct-answers-count");
  }


  getAudioLeft(id: number) {
    return this.http.get(this.apiUrl + "/audio-left/" + id, {responseType: 'arraybuffer'});
  }

  getAudioRight(id: number) {
    return this.http.get(this.apiUrl + "/audio-right/" + id, {responseType: 'arraybuffer'});
  }

}
