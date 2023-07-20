import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ParticularDateComponent } from '../particular-date/particular-date.component';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  forcastData?: any;
  query: string = 'delhi';
  usedData: any = [];
  isLoading = false;
  errorMessage: string = '';
  selectedDate: any;
  constructor(
    private shared: SharedService,
    private weather: WeatherService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.query = this.shared.getmessage();

    this.isLoading = true;
    this.weather.getWeather(this.query).subscribe(
      (data) => {
        this.isLoading = false;
        this.errorMessage = '';
        this.forcastData = data;
        this.usedData = [];
        // this.shared.setdata(this.forcastData.list);
        let n = this.forcastData.list.length;
        let date = new Date(this.forcastData.list[0].dt_txt);
        let hour = date.getHours();
        let i;
        if (hour <= 12) {
          i = 0;
        } else {
          this.usedData.push(this.forcastData.list[0]);
          i = 1;
        }
        for (let i = 0; i < n; i++) {
          let date = new Date(this.forcastData.list[i].dt_txt);
          let hour = date.getHours();

          if (hour === 12) this.usedData.push(this.forcastData.list[i]);
        }

        // this.shared.setmessage(this.query);
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'No Data Available...';
      }
    );
    this.shared.trigger$.subscribe(() => {
      this.ngOnInit();
    });
  }
  particularDate(index: any) {
    this.selectedDate = this.usedData[index].dt_txt.slice(0, 10);
    this.openPopup();
  }
  openPopup(): void {
    this.dialog.open(ParticularDateComponent, {
      maxWidth: '1200px',
      width: '90%',
      data: {
        date: this.selectedDate,
        dataForecast: this.forcastData.list,
        city: this.query,
      },
    });
  }
}

// getforecastData() {
//   this.t = this.forcastData.list;
//   let n = this.t.length;
//   let date = new Date(this.t[0].dt_txt);
//   let hour = date.getHours();
//   let i;
//   if (hour <= 12) {
//     i = 0;
//   } else {
//     this.usedData.push(this.t[0]);
//     i = 1;
//   }
//   for (let i = 0; i < n; i++) {
//     let date = new Date(t[i].dt_txt);
//     let hour = date.getHours();

//     if (hour === 12) this.usedData.push(t[i]);
//   }
//   console.log(temp);
// }

// getH(n: any) {
//   let str = Number(this.forcastData.list[0].dt_txt.substr(11, 2));
//   let t = (24 - str) / 3 + n * 8;
//   return t;
// }

// getData(n: any) {
//   let t = this.getH(n);
//   return this.forcastData.list[t].dt_txt.slice(0, 10);
// }

// getTemp(n: any) {
//   let t = this.getH(n);
//   return this.forcastData.list[t + 4].main.temp;
// }

// getFeelslike(n: any) {
//   let t = this.getH(n);
//   return this.forcastData.list[t + 4].main.feels_like;
// }

// getHumidity(n: any) {
//   let t = this.getH(n);
//   return this.forcastData.list[t + 4].main.humidity;
// }

// getminTemp(n: any) {
//   let str = Number(this.forcastData.list[0].dt_txt.substr(11, 2));
//   let t = (24 - str) / 3;
//   let k = t + n * 8;
//   let temp = 1000;

//   for (let i = n > 0 ? t : 0; i < (n > 0 ? 8 : t); i++) {
//     if (temp > this.forcastData.list[k + i].main.temp_min) {
//       temp = this.forcastData.list[k + i].main.temp_min;
//     }
//   }

//   return temp;
// }
//   getmaxTemp(n: any, query: string) {
//     let str = Number(this.forcastData.list[0].dt_txt.substr(11, 2));
//     let t = (24 - str) / 3;
//     let k = t + n * 8;
//     let temp = query == 'min' ? 10000 : -10000;

//     for (let i = n > 0 ? t : 0; i < (n > 0 ? 8 : t); i++) {
//       if (query == 'max') {
//         if (temp < this.forcastData.list[k + i].main.temp_max) {
//           temp = this.forcastData.list[k + i].main.temp_max;
//         }
//       } else {
//         if (temp > this.forcastData.list[k + i].main.temp_min) {
//           temp = this.forcastData.list[k + i].main.temp_min;
//         }
//       }
//     }

//     return temp;
//   }
// }
