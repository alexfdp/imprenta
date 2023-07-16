import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncargadoRoutingModule } from './encargado-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    EncargadoRoutingModule
  ]
})
export class EncargadoModule { }
