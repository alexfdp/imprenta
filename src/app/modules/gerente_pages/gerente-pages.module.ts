import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerentePagesRoutingModule } from './gerente-pages-routing.module';
import { HomeGerenteComponent } from './pages/home-gerente/home-gerente.component';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeGerenteComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    GerentePagesRoutingModule,
    SharedModule,
  ]
})
export class GerentePagesModule { }
