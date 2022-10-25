import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/Models/wheather.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {
 

  constructor(private http:HttpClient) { }

  getWheatherData(city:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.wheatherApiBaseUrl+"city/"+city,{
      headers: new HttpHeaders().set
      (
        environment.XRapidAPIHostHeaderName,
        environment.XRapidAPIHostHeaderValue
      )
      .set(
        environment.XRapidAPIKeyHeaderName,
        environment.XRapidAPIKeyHeaderValue
      ),
      // params: new HttpParams().set(
      //   'city',city
      // ).
      // set('units','meteic')
      // .set('mode','json')
    
      
    })

  }
}
