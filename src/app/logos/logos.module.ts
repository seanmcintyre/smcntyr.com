import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoGustComponent } from './logo-gust/logo-gust.component';
import { LogoHollyComponent } from './logo-holly/logo-holly.component';
import { LogoNoxComponent } from './logo-nox/logo-nox.component';
import { LogoLighthouseComponent } from './logo-lighthouse/logo-lighthouse.component';
import { LogoTedxslcComponent } from './logo-tedxslc/logo-tedxslc.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LogoGustComponent,
    LogoHollyComponent,
    LogoNoxComponent,
    LogoLighthouseComponent,
    LogoTedxslcComponent
  ],
  declarations: [
    LogoGustComponent,
    LogoHollyComponent,
    LogoNoxComponent,
    LogoLighthouseComponent,
    LogoTedxslcComponent
  ]
})
export class LogosModule { }
