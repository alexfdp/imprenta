import { Component, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Empleado } from 'src/app/modelos/Empleado';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent {
  empleados!: MatTableDataSource<Empleado>;
  displayedColumnsUser: string[] = ['ID', 'Nombre', 'Telefono', 'Correo', 'Sueldo', 'Rol', 'Acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.adminService.getEmpleados().subscribe({
      next: (data) => {
        this.empleados = new MatTableDataSource<Empleado>(data);
        this.empleados.connect();
        this.iniciar();
      },
      error: (response: any) => {
        this.adminService.regresar();
      }
    })
  }

  iniciar() {
    this.empleados.paginator = this.paginator;
    this.empleados.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.empleados.filter = filterValue.trim().toLowerCase();
    if (this.empleados.paginator) {
      this.empleados.paginator.firstPage();
    }
  }
  clickEmpleado = new Empleado();

}
