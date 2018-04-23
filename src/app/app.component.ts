import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Animations } from './animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Animations.resumeAni
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  animate: boolean;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.animate = true;
  }

}
