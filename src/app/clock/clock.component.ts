import { Component } from '@angular/core';

import { ClockService } from './clock.service';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  clock: ClockService;

  constructor(clock: ClockService) {
    this.clock = clock;
  }
}
