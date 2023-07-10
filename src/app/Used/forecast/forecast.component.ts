import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  forcastData?: any;
  query: string = 'delhi';
  // data: object = {};

  constructor(private shared: SharedService, private weather: WeatherService) {}

  ngOnInit(): void {
    this.query = this.shared.getmessage();
    // console.log(this.data);
    this.weather.getWeather(this.query).subscribe({
      next: (data) => {
        this.forcastData = data;
        console.log(this.forcastData);
        // this.shared.setmessage(query);
      },
    });
  }

  getData(n: any) {
    let str = Number(this.forcastData.list[0].dt_txt.substr(11, 2));
    let t = (24 - str) / 3 + n * 8;
    return this.forcastData.list[t].dt_txt.slice(0, 10);
  }

  getTemp(n: any) {
    let str = Number(this.forcastData.list[0].dt_txt.substr(11, 2));
    let t = (24 - str) / 3 + n * 8;
    return this.forcastData.list[t + 4].main.temp;
  }

  getFeelslike(n: any): any {
    let str = Number(this.forcastData.list[0].dt_txt.substr(11, 2));
    let t = (24 - str) / 3 + n * 8;
    return this.forcastData.list[t + 4].main.feels_like;
  }

  getHumidity(n: any) {
    let str = Number(this.forcastData.list[0].dt_txt.substr(11, 2));
    let t = (24 - str) / 3 + n * 8;
    return this.forcastData.list[t + 4].main.humidity;
  }

  getminTemp(n: any) {
    let str = Number(this.forcastData.list[0].dt_txt.substr(11, 2));
    let t = (24 - str) / 3;
    let k = t + n * 8;
    let temp = 1000;

    for (let i = n > 0 ? t : 0; i < (n > 0 ? 8 : t); i++) {
      if (temp > this.forcastData.list[k + i].main.temp_min) {
        temp = this.forcastData.list[k + i].main.temp_min;
      }
    }

    return temp;
  }
  getmaxTemp(n: any) {
    let str = Number(this.forcastData.list[0].dt_txt.substr(11, 2));
    let t = (24 - str) / 3;
    let k = t + n * 8;
    let temp = -10000;

    for (let i = n > 0 ? t : 0; i < (n > 0 ? 8 : t); i++) {
      if (temp < this.forcastData.list[k + i].main.temp_max) {
        temp = this.forcastData.list[k + i].main.temp_max;
      }
    }

    return temp;
  }
}
