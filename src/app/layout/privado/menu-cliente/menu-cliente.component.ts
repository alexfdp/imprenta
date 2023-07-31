import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.scss']
})
export class MenuClienteComponent {

  nombreUser = localStorage.getItem('name');

  constructor(private routerprd: Router) { }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('rol');
    this.routerprd.navigateByUrl("/sinsesion/login");
  }
}
