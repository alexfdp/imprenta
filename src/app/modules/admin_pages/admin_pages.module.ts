import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { admin_pagesRoutingModule } from './admin_pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    VentasComponent,
    AnalisisComponent,
    PedidosComponent,
    FacturaComponent,
    ClientesComponent,
    ProveedoresComponent,
    MaterialesComponent,
    EmpleadosComponent,
    ProductosComponent,
    CotizacionesComponent,
  ],
  imports: [
    CommonModule,
    CurrencyPipe,
    // FormsModule,
    ReactiveFormsModule,
    admin_pagesRoutingModule,
    FlexLayoutModule,
    NgxChartsModule,
    SharedModule
  ]
})
export class admin_pagesModule { }
