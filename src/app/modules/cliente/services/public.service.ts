import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/modelos/Producto';
import { ProductCart } from 'src/app/modelos/ProductCart';
import { CotizacionCliente } from 'src/app/modelos/CotizacionCliente';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private PRODUCTSURL = "Public/GetProductosP"
  private POSTCARTPRODUCT = "Public/PostProductsCart"
  private GETCOTIZACIONES = "Public/GetCotizacionesCli"

  constructor(private http: HttpClient, private routerprd: Router) { }

  public getProducts() {
    return this.http.get<Producto[]>(`${environment.apiUrl}/${this.PRODUCTSURL}`);
  }

  public postProductsCarts(productos: ProductCart[]) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.post<boolean>(`${environment.apiUrl}/${this.POSTCARTPRODUCT}`, productos, { headers });
  }

  public getCotizaciones() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.get<CotizacionCliente[]>(`${environment.apiUrl}/${this.GETCOTIZACIONES}`, { headers });
  }
}
