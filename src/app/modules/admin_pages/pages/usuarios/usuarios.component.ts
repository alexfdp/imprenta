import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AdminService } from '../../services/admin.service';
import { User } from 'src/app/modelos/User';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

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
export class UsuariosComponent {
  usuarios!: MatTableDataSource<User>;
  displayedColumnsUser: string[] = ['ID', 'Nombre', 'Cedula', 'Telefono', 'Direccion', 'FechaNacimiento', 'Correo', 'Usuario', 'Rol'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.get();
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
    this.adminService.getUsers().subscribe({
      next: (data) => {
        this.usuarios = new MatTableDataSource<User>(data);
        this.usuarios.connect();
        this.iniciar();
      },
      error: (response: any) => {
        this.adminService.regresar();
      }
    })
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  clickUsuario = new User();
}
