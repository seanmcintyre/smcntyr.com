import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  animate: boolean;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.animate = true;
  }

  routeCollapse() {
    return this.router.url === '/' ? false : 'collapse';
  }

}
