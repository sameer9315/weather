import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
// import { cityAll } from './city.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  template: ``,
})
export class WeatherComponent implements OnInit {
  query: string = 'delhi';
  weatherData: any;
  isLoading = false;
  errorMessage: string = '';

  constructor(private weather: WeatherService, private shared: SharedService) {}
  ngOnInit(): void {
    this.query = this.shared.getmessage();
    this.getWeather(this.query);

    this.shared.trigger$.subscribe(() => {
      this.ngOnInit();
    });
  }

  // console.log(this.query);
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
    this.isLoading = true;
    this.errorMessage = '';
    this.weather.getWeather(this.query).subscribe(
      (data) => {
        this.weatherData = data;
        this.isLoading = false;
        this.shared.setmessage(query);
        // console.log(this.weatherData);
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'No Data Available...';
      }
    );
  }
}
