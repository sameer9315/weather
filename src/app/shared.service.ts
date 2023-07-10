import { Injectable } from '@angular/core';
import { WeatherComponent } from './Used/weather/weather.component';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  query: string = 'delhi';
  reload: boolean = false;
  constructor() {}
  setmessage(message: string) {
    this.query = message;
  }
  getmessage() {
    return this.query;
  }
}
