import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private shared: SharedService, private router: Router) {}

  ngOnInit(): void {}

  emitEvent(query: string) {
    this.shared.setmessage(query);
    // this.weather.onSubmit();
    // console.log(query);

    this.router.navigateByUrl('/');

    // console.log('emitted app');
  }
}
