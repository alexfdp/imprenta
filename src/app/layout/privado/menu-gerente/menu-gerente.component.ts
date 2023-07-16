import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-gerente',
  templateUrl: './menu-gerente.component.html',
  styleUrls: ['./menu-gerente.component.scss']
})
export class MenuGerenteComponent {
  nombreUser = localStorage.getItem('name');
  constructor() {
    console.log("nombre: " + this.nombreUser);
  }
}
