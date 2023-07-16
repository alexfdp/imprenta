import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionComponent } from './layout/publico/sesion/sesion.component';
import { MenuAdminComponent } from './layout/privado/menu-admin/menu-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BienvenidaComponent } from './layout/publico/bienvenida/bienvenida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationInterceptor } from './shared/servicios/interceptor';
import { MenuEncargadoComponent } from './layout/privado/menu-encargado/menu-encargado.component';
import { MenuGerenteComponent } from './layout/privado/menu-gerente/menu-gerente.component';
import { MenuEmpleadoComponent } from './layout/privado/menu-empleado/menu-empleado.component';
import { MenuClienteComponent } from './layout/privado/menu-cliente/menu-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    MenuAdminComponent,
    BienvenidaComponent,
    MenuEncargadoComponent,
    MenuGerenteComponent,
    MenuEmpleadoComponent,
    MenuClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatPaginatorModule,
    FlexLayoutModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
