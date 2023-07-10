import { Injectable } from '@angular/core';
// import { Geolocation } from '@angular/common/geolocation';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { weatherData } from './Used/weather/weather.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(query: string) {
    return this.http.get(environment.apiUrl, {
      params: new HttpParams()
        .set('q', query)
        .set('appid', environment.apiKey)
        .set('units', 'metric'),
    });
  }
}
//`${environment.apiUrl}?q=${query}&appid=${environment.apiKey}&units=metric`
// {
//   // headers: new HttpHeaders()
//   //   .set(
//   //     environment.OpenWeatherMapHeaderName,
//   //     environment.OpenWeatherAPIkeyHeaderValue
//   //   )
//   //   .set(
//   //     environment.OpenWeatherAPIkeyHeaderName,
//   //     environment.OpenWeatherAPIkeyHeaderValue
//   //   ),
//   // params: new HttpParams().set('q', query).set('units', 'metric'),
// }

// const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${this.ApiKey}&units=${this.unit}`;
// return this.http.get<weatherData>(apiUrl);

// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&APPID=${this.ApiKey}&units=${this.unit}`;
//const apiUrl = `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=28.6667&lon=77.2167&appid=${this.ApiKey}`;

//https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=79228b9745f122eab250446ccba3f02c&units=metric
