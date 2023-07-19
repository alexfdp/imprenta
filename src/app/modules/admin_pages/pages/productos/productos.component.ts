import { Component, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Producto } from 'src/app/modelos/Producto';
import { AdminService } from '../../services/admin.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos!: MatTableDataSource<Producto>;
  displayedColumnsProduct: string[] = ['ID', 'Foto', 'Nombre', 'Descripcion', 'Acciones'];
  previsualizacion!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  animal!: string;
  name!: string;
  productoNuevo!: Producto;

  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  ngAfterViewInit(): void { }

  ngOnInit(): void {
    this.get();
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

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarProductoDialog, {
      data: new Producto
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.productoNuevo = result;
      if (this.productoNuevo.nombre != "") {
        this.agregarProducto(this.productoNuevo);
      }
    });

  }

  agregarProducto(product: Producto) {
    this.adminService.addProducto(product).subscribe({
      next: (data) => {
        if (data) {
          console.log("Guardado correctamente");
          this.get();
        }
      },
      error: (response: any) => {
        console.log("Error al guardar: " + response.data);
      }
    });
  }

  get() {
    this.adminService.getProductos().subscribe({
      next: (data) => {
        this.productos = new MatTableDataSource<Producto>(data);
        this.productos.connect();
        this.iniciar();
      },
      error: (response: any) => {
        this.adminService.regresar();
      }
    });
  }

  clickProducto = new Producto();
}


@Component({
  selector: 'agregar-producto-dialog',
  templateUrl: 'agregar-producto-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class AgregarProductoDialog {
  constructor(
    public dialogRef: MatDialogRef<AgregarProductoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Producto,
    private sanitizer: DomSanitizer
  ) { }

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.data.imagen = imagen.base;
    });
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) { }
    });

  onNoClick(): void {
    this.dialogRef.close();
  }
}