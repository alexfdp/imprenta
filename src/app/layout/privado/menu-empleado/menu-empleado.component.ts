import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-empleado',
  templateUrl: './menu-empleado.component.html',
  styleUrls: ['./menu-empleado.component.scss']
})
export class MenuEmpleadoComponent {
  nombreUser = localStorage.getItem('name');
  constructor() {
    console.log("nombre: " + this.nombreUser);
  }
}
