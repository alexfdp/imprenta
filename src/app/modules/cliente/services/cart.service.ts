import { Injectable } from '@angular/core';
import { ProductCart } from 'src/app/modelos/ProductCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productsCart: ProductCart[] = []

  private mensaje: any;

  constructor() { }

  setProducts(producto: ProductCart[]): void {
    this.productsCart = producto;
  }

  getProducts(): ProductCart[] {
    return this.productsCart;
  }

  setmensaje(mensa: any) {
    this.mensaje = mensa;
  }
  getmensaje() {
    return this.mensaje;
  }
}
