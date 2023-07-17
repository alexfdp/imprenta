import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionComponent } from './layout/publico/sesion/sesion.component';
import { MenuAdminComponent } from './layout/privado/menu-admin/menu-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BienvenidaComponent } from './layout/publico/bienvenida/bienvenida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationInterceptor } from './shared/servicios/interceptor';
import { MenuEncargadoComponent } from './layout/privado/menu-encargado/menu-encargado.component';
import { MenuGerenteComponent } from './layout/privado/menu-gerente/menu-gerente.component';
import { MenuEmpleadoComponent } from './layout/privado/menu-empleado/menu-empleado.component';
import { MenuClienteComponent } from './layout/privado/menu-cliente/menu-cliente.component';
import { SharedModule } from './shared/shared.module';

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
    SharedModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
