import { Component } from '@angular/core';
import { FB } from './index';
const stats = require('./stats.json');

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fb: string;
  money: number;
  stats: any;
  summary: any;

  constructor() {
    this.money = 5000;
    FB
      .database()
      .ref('test')
      .once('value')
      .then(function(s) {
        console.log('firebase:')
        console.log(JSON.stringify(s.val()));
      });


    this.stats = stats;
    this.summary = sortByUsage(calculateUsage(this.stats));
  }
}

function vals(obj) {
  let vals = [];
  Object.keys(obj).forEach((key) => { vals.push(obj[key]) });
  return vals
}

function calculateUsage(stats) {
  let usage = {};
  stats.days.forEach((day) => {
    day.appUsages.forEach((app) => {
      usage[app.appName] = (usage[app.appName] || 0) + app.onScreen;
    });
  });
  return usage;
}

function sortByUsage(usage) {
  let summary = [];
  //const max = Math.max(...Object.values(usage));
  const max = Math.max(...vals(usage));

  Object.keys(usage).forEach((key) => {
    if (usage[key] > 10) {
      summary.push({
        name: key,
        total: usage[key],
        css: {width: `${(usage[key] / max) * 100}%`}
      });
    }
    summary.sort((a, b) => {
      if (a.total > b.total) return 1;
      if (b.total > a.total) return -1;
      return 0;
    });
  });

  return summary;
}
