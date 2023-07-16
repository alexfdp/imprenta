import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { admin_pagesRoutingModule } from './admin_pages-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';

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
    EmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    admin_pagesRoutingModule,
    NgxChartsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // BrowserAnimationsModule,
    CurrencyPipe,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatSortModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class admin_pagesModule { }
