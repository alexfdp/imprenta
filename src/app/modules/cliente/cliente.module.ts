import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClienteViewComponent } from './pages/cliente-view/cliente-view.component';
import { FormsModule } from '@angular/forms';
import { clienteviewRoutingModule } from './cliente-routing.module';
import { CommonModule } from '@angular/common';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CotizarComponent } from './pages/cotizar/cotizar.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';

@NgModule({
  declarations: [
    ClienteViewComponent,
    HomeClienteComponent,
    CotizarComponent,
    PedidosComponent,
    CotizacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    clienteviewRoutingModule,
    RouterModule,
    SharedModule
  ],providers: []
})
export class ClienteModule { }