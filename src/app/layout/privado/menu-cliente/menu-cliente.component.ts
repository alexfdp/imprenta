import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.scss']
})
export class MenuClienteComponent {
  nombreUser = localStorage.getItem('name');
  constructor() {
    console.log("nombre: " + this.nombreUser);
  }
}
