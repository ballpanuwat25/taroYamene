import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaroYameneService {

  apiUrl = 'https://pirun.ku.ac.th/~faaspsu/edu/mobile/calculateSampleSize.php';
  parameters = '';

  constructor(private http: HttpClient) { }

  calculateSampleSize(populationSize: any, samplingError: any): Observable<HttpResponse<string>> {
    this.parameters = 'populationSize=' + populationSize + '&samplingError=' + samplingError;
    var url = this.apiUrl + '?' + this.parameters;

    return this.http.get<string>(url, { observe: 'response' });
  }
}
