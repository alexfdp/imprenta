import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    VentasComponent,
    AnalisisComponent,
    InventarioComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    admin_pagesRoutingModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class admin_pagesModule { }
