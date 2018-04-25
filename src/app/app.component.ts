import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { ClockService } from './clock/clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sean McIntyre | Product Designer, Engineer';
  clock: ClockService;

  constructor(clock: ClockService) {
    this.clock = clock;
    console.log(this.clock);
  }

  ngOnInit() {
  }

  skyline() {
    return `assets/nyc-${this.clock.hour}.png`;
  }

}
