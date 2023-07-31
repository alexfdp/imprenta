import { Component, Inject } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Cotizacion } from 'src/app/modelos/Cotizacion';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { ProductCot } from 'src/app/modelos/ProductCot';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import Swal from 'sweetalert2';

export interface Cotiza {
  nombre: string,
  prod: ProductCot[]
}
@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss']
})
export class CotizacionesComponent {

  displayedColumnsProduct: string[] = ['ID', 'Nombre', 'Fecha', 'Acciones'];

  cotizaciones!: Cotizacion[];

  constructor(private _adminService: AdminService, private datepipe: DatePipe, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this._adminService.getCotizacionesPend().subscribe({
      next: (data) => {
        this.cotizaciones = data;
      },
      error: (response: any) => {
        console.log("Error al consultar BD: " + response.data);
      }
    })
  }

  cot !: Cotiza;
  openDialog(id: number, nom: string): void {
    this._adminService.getProdsCotizaciones(id).subscribe({
      next: (data) => {
        this.cot = {
          nombre: nom,
          prod: data
        }
        const dialogRef = this.dialog.open(AsignarPreciosDialog, {
          data: this.cot
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.cot = result;
          console.log(this.cot);
          this._adminService.potCotProducts(this.cot.prod).subscribe({
            next: (data) => {
              if (data) {
                this.cargarDatos();
                Swal.fire({
                  text: 'Datos guardados correctamente',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                });
              } else {
                Swal.fire({
                  text: 'Error al guardar datos',
                  icon: 'error',
                  confirmButtonText: 'Ok'
                });
              }
            },
            error: (result: any) => {
              Swal.fire({
                text: 'Error al conectar con la Base de datos',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
            }
          });
        });
      },
      error: (response: any) => {
        console.log("error al consultar datos de cotizacion");
      }
    })
  }

  formatofecha(fecha: Date) {
    return this.datepipe.transform(fecha, 'dd/MM/yyyy HH:mm');
  }
}


@Component({
  selector: 'asignar-precios-dialog',
  templateUrl: 'asignar-precios-dialog.html',
  standalone: true,
  styleUrls: ['./cotizaciones.component.scss'],
  imports: [CommonModule, SharedModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class AsignarPreciosDialog {
  constructor(
    public dialogRef: MatDialogRef<AsignarPreciosDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Cotiza,
    private sanitizer: DomSanitizer
  ) { }

  products!: ProductCot[];

  val!: number;
  ngOnInit(): void {
    this.products = this.data.prod;
    this.val = this.products[0].producto_id;
    this.cargar();
  }

  pro!: ProductCot;
  selectProd(event: Event) {
    this.val = +(event.target as HTMLSelectElement).value;
    this.cargar();
  }

  cargar() {
    let pri = this.products.find(element => element.producto_id == this.val);
    if (pri) {
      this.pro = pri;
    } else {
      console.log("elemento incorrecto");
    }
  }

  subtotalProduct!: number;
  pre_unitario!: number;
  ingresaValor(event: Event) {
    this.pre_unitario = +(event.target as HTMLInputElement).value;
    this.subtotalProduct = this.pre_unitario * this.pro.cantidad;
  }

  cambio() {
    let pri = this.products.find(element => element.estado != "val");
    if (pri) {
      this.pro = pri;
    } else {
      this.valido = false;
    }
    this.subtotalProduct = 0;
  }
  valido = true;
  guardarData() {
    const idx = this.products.indexOf(this.pro);
    this.pro.precio_unitario = this.pre_unitario;
    this.pro.estado = "val";
    this.cambio();
  }
}