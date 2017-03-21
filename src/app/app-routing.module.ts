import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HireComponent } from './hire/hire.component';
import { StatsComponent } from './stats/stats.component';

const HireData = {};
const StatsData = {};

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'test',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'hire',
    component: HireComponent,
    data: HireData
  },
  {
    path: 'stats',
    component: StatsComponent,
    data: StatsData
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
