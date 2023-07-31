import { Component, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductCart } from 'src/app/modelos/ProductCart';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss']
})
export class CotizarComponent {
  productos!: ProductCart[];
  displayedColumnsProduct: string[] = ['Nombre', 'Detalles', 'Cantidad', 'Acciones'];

  constructor(private _cartService: CartService, private _publicService: PublicService) {
    this.validar();
  }

  ngOnInit(): void {
    // this.validar()
  }
  validar(): void {
    this.productos = this._cartService.getProducts();
  }

  btnAceptar() {
    this._publicService.postProductsCarts(this.productos).subscribe({
      next: (data) => {
        if (data) {
          this.eliminarDataPro();
          Swal.fire(
            '¡Datos enviados!',
            'Espere a que se envíe una respuesta.',
            'success'
          )
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal al enviar datos'
          })
        }
      },
      error: (response: any) => {
        console.log("error: " + response.data);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió con el server'
        })
      }
    })
  }

  btnCancelar() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarDataPro();
        Swal.fire(
          'Cotización eliminada',
          'Los productos agregados han sido eliminados',
          'success'
        )
      }
    })
  }

  eliminarDataPro(){
    this._cartService.setProducts([]);
    this.validar();
  }
}
