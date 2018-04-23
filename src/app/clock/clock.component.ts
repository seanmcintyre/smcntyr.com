import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import { gradients } from './sky';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  timeOffset: number = 0;
  hour: number;
  minute: number;
  second: number;
  dash: string;
  size: number = 75;

  constructor() {
  }

  ngOnInit() {
    timer(0, 1000)
      .subscribe(() => this.setTime());
  }

  nextHour() {
    this.timeOffset = (new Date().getHours() + this.timeOffset >= 24) ? this.timeOffset - 24 : this.timeOffset + 1;
    this.setTime();
  }

  getDash() {
    const totalDiameter = this.size * 3.14;
    const diff = this.hour + (this.minute/60) + (this.second/600);
    const partialDiameter = Math.round(diff * (totalDiameter/24) * 100) / 100;
    return `${partialDiameter} ${totalDiameter}`;;
  }

  setTime() {
    [this.hour, this.minute, this.second] = getTime(this.timeOffset);
    console.log(this.hour);
    document.body.style.background = gradient(this.hour);
  }

}

const gradient = (hour) => `linear-gradient(${gradients[leadingZero(hour)]})`;

const getTime = (offset = 0) => {
  const now = new Date();
  return [
    offset + now.getHours(),
    leadingZero(now.getMinutes()),
    leadingZero(now.getSeconds())
  ]
}


const leadingZero = (i) => {
  if (i < 10) {i = '0' + i};
  return i;
}
