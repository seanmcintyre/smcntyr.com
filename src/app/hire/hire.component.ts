import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  money: Number;

  constructor() {
    this.money = 10000;
  }

  onKey(event: any) {
    if (event.key === 'Enter') event.srcElement.blur();
  }

  ngOnInit() {
  }

}
