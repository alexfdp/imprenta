import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/modules/admin_pages/services/admin.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent {

  nombreUser = localStorage.getItem('name');
  num!: number;
  constructor(private routerprd: Router, private adminSer: AdminService) { }

  ngOnInit(): void {
    this.cantidad();
  }
  cantidad() {
    this.adminSer.getCotizacionesPend().subscribe({
      next: (data) => {
        this.num = data.length;
      },
      error: (result: any) => {

      }
    })
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('rol');
    this.routerprd.navigateByUrl("/sinsesion/login");
  }
}
