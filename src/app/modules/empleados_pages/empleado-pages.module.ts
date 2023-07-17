import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoPagesRoutingModule } from './empleado-pages-routing.module';
import { HomeEmpleadoComponent } from './pages/home-empleado/home-empleado.component';
import { NominasComponent } from './pages/nominas/nominas.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeEmpleadoComponent,
    NominasComponent
  ],
  imports: [
    CommonModule,
    EmpleadoPagesRoutingModule,
    SharedModule
  ]
})
export class EmpleadoPagesModule { }
