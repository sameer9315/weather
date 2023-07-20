import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-particular-date',
  templateUrl: './particular-date.component.html',
  styleUrls: ['./particular-date.component.css'],
})
export class ParticularDateComponent {
  particularDateData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.handleClick();
  }

  handleClick(): void {
    let mx = -1000.0;
    let mn = 10000.0;
    let arr = [];

    for (let i = 0; i < 40; i++) {
      if (this.data.date === this.data.dataForecast[i].dt_txt.slice(0, 10)) {
        mx = Math.max(mx, this.data.dataForecast[i].main.temp);
        mn = Math.min(mn, this.data.dataForecast[i].main.temp);
        arr.push(this.data.dataForecast[i]);
      }
    }
    this.particularDateData = {
      maxTemp: mx,
      minTemp: mn,
      data: arr,
    };

    console.log(this.particularDateData);

    console.log('Event clicked Popup');
    // console.log(this.particularDateData.data[0].dt_txt.substring(11));
  }

  // ngOnInit(): void {
  //   this.shared.setClickedComponent('C');
  //   this.data.dataForecast = this.shared.getdata();
  //   this.data.city = this.data;
  //   this.particularDate = this.shared.getClickedDate();
  //   let mx = -1000.0;
  //   let mn = 10000.0;
  //   let arr = [];
  //   this.loaded = true;

  //   for (let i = 0; i < 40; i++) {
  //     if (this.particularDate === this.data.dataForecast[i].dt_txt.slice(0, 10)) {
  //       mx = Math.max(mx, this.data.dataForecast[i].main.temp);
  //       mn = Math.min(mn, this.data.dataForecast[i].main.temp);
  //       arr.push(this.data.dataForecast[i]);
  //     }
  //   }
  //   this.particularDateData = {
  //     maxTemp: mx,
  //     minTemp: mn,
  //     data: arr,
  //   };

  //   console.log(this.particularDateData);
  //   console.log(this.loaded);
  //   // console.log(this.particularDateData.data[0].dt_txt.substring(11));
  // }
}

// export class ParticularDateComponent implements OnInit {
//   dataAll: any;
//   particularDate: any;
//   particularDateData: any;
//   city: any;
//   loaded = false;
//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private shared: SharedService // private weather: WeatherService, // private router: Router
//   ) {}
//   ngOnInit(): void {
//     this.shared.setClickedComponent('C');
//     this.data.dataForecast = this.shared.getdata();
//     this.data.city = this.data;
//     this.particularDate = this.shared.getClickedDate();
//     let mx = -1000.0;
//     let mn = 10000.0;
//     let arr = [];
//     this.loaded = true;

//     for (let i = 0; i < 40; i++) {
//       if (this.particularDate === this.data.dataForecast[i].dt_txt.slice(0, 10)) {
//         mx = Math.max(mx, this.data.dataForecast[i].main.temp);
//         mn = Math.min(mn, this.data.dataForecast[i].main.temp);
//         arr.push(this.data.dataForecast[i]);
//       }
//     }
//     this.particularDateData = {
//       maxTemp: mx,
//       minTemp: mn,
//       data: arr,
//     };

//     console.log(this.particularDateData);
//     console.log(this.loaded);
//     // console.log(this.particularDateData.data[0].dt_txt.substring(11));
//   }
// }
