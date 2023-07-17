import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Productos } from 'src/app/modelos/Productos';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos!: MatTableDataSource<Productos>;
  displayedColumnsProduct: string[] = ['ID', 'Foto', 'Nombre', 'Descripcion', 'Acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService) { }

  ngAfterViewInit(): void { }

  ngOnInit(): void {
    this.get();
    this.adminService.cargar(['snippets']);
  }

  iniciar() {
    this.productos.paginator = this.paginator;
    this.productos.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.productos.filter = filterValue.trim().toLowerCase();
    if (this.productos.paginator) {
      this.productos.paginator.firstPage();
    }
  }

  get() {
    // this.adminService.getUsers().subscribe({
    //   next: (data) => {
    //     this.usuarios = new MatTableDataSource<User>(data);
    //     this.usuarios.connect();
    //     this.iniciar();
    //   },
    //   error: (response: any) => {
    //     this.adminService.regresar();
    //   }
    // });
  }

  clickProducto = new Productos();



}