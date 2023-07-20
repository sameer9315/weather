import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { FormControl } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { startWith, map } from 'rxjs/operators';
import { WeatherService } from './weather.service';
import { ParticularDateComponent } from './Used/particular-date/particular-date.component';

// import { PopupComponent } from './popup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cityData: string[] = [];
  city: any;
  showDropdown: boolean = false;
  clickedValue: any;
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  // searchControl = new FormControl();
  // filteredOptions: Observable<string[]>;

  constructor(
    private shared: SharedService,
    private router: Router,
    private weather: WeatherService
  ) {
    this.getCity();
  }

  ngOnInit(): void {}

  // FUnction to Fetch City List From API

  private getCity() {
    this.weather.makeCityRequest().subscribe((response) => {
      this.city = response;
      this.cityData = this.city.data;
      console.log(this.cityData);
    });
  }

  // For Sending Event to the Weather ForCast Data
  emitEvent(event: any) {
    this.shared.setmessage(event.value);

    console.log('Selected option:', event.value);
    this.shared.triggerEvent();
  }
  // }
}
// filterOptions(value: string): string[] {
//   const filterValue = value.toLowerCase();
//   return this.cityData.filter((option) =>
//     option.toLowerCase().includes(filterValue)
//   );
// }

// this.filteredOptions = this.searchControl.valueChanges.pipe(
//   startWith(''),
//   map((value) => this.filterOptions(value))
// );
