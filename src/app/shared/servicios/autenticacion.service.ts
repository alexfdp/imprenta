import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private ingresar: boolean = false;

  constructor() { }

  public ingresarAplicativo(obj: any): boolean {
    this.ingresar = obj.usuario == 'ana' && obj.password == '12345678';
    return this.ingresar
  }

  public habilitarlogueo() {
    return this.ingresar;
  }

  public cargar( archivos: string[]){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = './assets/js/'+archivo+'.js';
      let body = document.getElementsByTagName('body')[0];
      body.appendChild(script);
    }
  }
}
