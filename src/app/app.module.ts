import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { LogosModule } from './logos/logos.module';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { LighthouseComponent } from './portfolio/lighthouse/lighthouse.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    AboutComponent,
    LighthouseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LogosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
