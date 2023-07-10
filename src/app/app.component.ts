import { Component } from '@angular/core';
import { AutenticacionService } from './shared/servicios/autenticacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto_imprenta';
  
  constructor(private loginAuth: AutenticacionService) {
  }

}
