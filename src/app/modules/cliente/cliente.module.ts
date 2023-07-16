import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClienteViewComponent } from './pages/cliente-view/cliente-view.component';
import { FormsModule } from '@angular/forms';
import { clienteviewRoutingModule } from './cliente-routing.module';
import { CommonModule } from '@angular/common';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';

@NgModule({
  declarations: [
    ClienteViewComponent,
    HomeClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    clienteviewRoutingModule,
    RouterModule,
    
  ],providers: []
})
export class ClienteModule { }