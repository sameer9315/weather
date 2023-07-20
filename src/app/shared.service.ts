import { Injectable } from '@angular/core';
import { WeatherComponent } from './Used/weather/weather.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private triggerSubject = new Subject<void>();
  query: string = 'delhi';
  // reload: boolean = false;
  private clickedComponent: string = '';
  dataAll: any;
  particularDate: any;
  constructor() {}
  setmessage(message: string) {
    this.query = message;
  }
  getmessage() {
    return this.query;
  }

  triggerEvent() {
    this.triggerSubject.next();
  }

  get trigger$() {
    return this.triggerSubject.asObservable();
  }
}
