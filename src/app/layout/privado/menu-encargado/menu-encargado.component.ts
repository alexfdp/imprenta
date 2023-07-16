import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-encargado',
  templateUrl: './menu-encargado.component.html',
  styleUrls: ['./menu-encargado.component.scss']
})
export class MenuEncargadoComponent {
  nombreUser = localStorage.getItem('name');
  constructor() {
    console.log("nombre: " + this.nombreUser);
  }
}
