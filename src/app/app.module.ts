import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionComponent } from './layout/publico/sesion/sesion.component';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    ContenidoComponent,
    BienvenidaComponent,
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
