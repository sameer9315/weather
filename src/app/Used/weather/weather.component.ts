import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  query: string = 'delhi';
  weatherData: any;
  fiind: boolean = true;

  constructor(private weather: WeatherService, private shared: SharedService) {}
  ngOnInit(): void {
    this.query = this.shared.getmessage();
    this.getWeather(this.query);
    console.log(this.query);
  }

  // emitEvent(query: string) {
  //   this.shared.setmessage(query);
  //   // this.weather.onSubmit();
  //   // console.log(query);

  //   // this.router.navigateByUrl('/');
  //   this.getWeather(this.query);

  //   // console.log('emitted app');
  // }

  // onSubmit() {
  //   this.getWeather(this.query);
  // }

  // handleEvent(eventData: string) {
  //   // this.query = this.shared.getmessage();
  //   this.getWeather(eventData);
  //   console.log('event emitted');
  // }

  private getWeather(query: string) {
    this.weather.getWeather(this.query).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.shared.setmessage(query);
        console.log(this.weatherData);
      },
    });
  }
}
