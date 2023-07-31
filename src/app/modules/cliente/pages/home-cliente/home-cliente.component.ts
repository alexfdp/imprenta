import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { Producto } from 'src/app/modelos/Producto';
import { CartService } from '../../services/cart.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PublicService } from '../../services/public.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductCart } from 'src/app/modelos/ProductCart';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.scss']
})
export class HomeClienteComponent implements AfterViewInit {

  tam!: number;
  constructor(private _cartService: CartService, private _publicService: PublicService,
    public dialog: MatDialog) { this.tam = this._cartService.getProducts().length; }

  productos2!: Producto[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 12; // Número de elementos por página
  pageIndex = 0; // Página inicial (0-indexed)
  @ViewChild(MatSort) sort!: MatSort;

  productoNuevo!: ProductCart;

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.get();
  }

  openDialog(id: number, nombre: string): void {
    const dialogRef = this.dialog.open(AgregarCarritoDialog, {
      data: { producto_id: id, nombre: nombre, detalles: '', cantidad: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productoNuevo = result;
        this._cartService.getProducts().push(this.productoNuevo);
        this.tam = this._cartService.getProducts().length;
      }
    });
  }

  get() {
    this._publicService.getProducts().subscribe({
      next: (data) => {
        this.productos2 = data;
        this.paginateCards();
      },
      error: (response: any) => {
        console.log("error: " + response.data);
      }
    });
  }

  searchTerm: string = '';
  paginatedCards!: Producto[];
  paginateCards() {
    const startIndex = this.pageIndex * this.pageSize;
    // const filterValue = (event.target as HTMLInputElement).value;
    const filtro = this.productos2.filter(producto =>
      producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    // this.paginatedCards = this.productos2.slice(startIndex, startIndex + this.pageSize);
    this.paginatedCards = filtro.slice(startIndex, startIndex + this.pageSize);
  }
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.paginateCards();
  }
}

//creación de componente dialog

@Component({
  selector: 'agregar-carrito-dialog',
  templateUrl: 'agregar-carrito-dialog.html',
  standalone: true,
  imports: [CommonModule, SharedModule,
    FormsModule],
})
export class AgregarCarritoDialog {
  constructor(
    public dialogRef: MatDialogRef<AgregarCarritoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ProductCart,
    private sanitizer: DomSanitizer
  ) { }

  onNoClick(): void {
    this.data.detalles = "";
    this.dialogRef.close();
  }
}