import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AdminService } from '../../services/admin.service';
import { User } from 'src/app/modelos/User';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements AfterViewInit {
  usuarios!: MatTableDataSource<User>;
  displayedColumnsUser: string[] = ['ID', 'Nombre', 'Cedula', 'Telefono', 'Direccion', 'FechaNacimiento', 'Correo', 'Usuario', 'Rol'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.get();
  }

  ngAfterViewInit(): void {
    
  }

  iniciar() {
    this.usuarios.paginator = this.paginator;
    this.usuarios.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usuarios.filter = filterValue.trim().toLowerCase();
    if (this.usuarios.paginator) {
      this.usuarios.paginator.firstPage();
    }
  }

  get() {
    this.adminService.getUsers().subscribe((data) => {
      this.usuarios = new MatTableDataSource<User>(data);
      this.usuarios.connect();
    });
    this.iniciar();
  }
}
