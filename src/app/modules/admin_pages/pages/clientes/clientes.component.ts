import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/modelos/Cliente';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  clientes!: MatTableDataSource<Cliente>;
  displayedColumnsUser: string[] = ['ID', 'Nombre', 'Telefono', 'Correo', 'Acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.adminService.getClientes().subscribe({
      next: (data) => {
        this.clientes = new MatTableDataSource<Cliente>(data);
        this.clientes.connect();
        this.iniciar();
      },
      error: (response: any) => {
        this.adminService.regresar();
      }
    })
  }

  iniciar() {
    this.clientes.paginator = this.paginator;
    this.clientes.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientes.filter = filterValue.trim().toLowerCase();
    if (this.clientes.paginator) {
      this.clientes.paginator.firstPage();
    }
  }
  clickCliente = new Cliente();
}
