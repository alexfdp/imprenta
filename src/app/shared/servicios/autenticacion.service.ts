import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/modules/modelos/Login';
import { Registro } from 'src/app/modules/modelos/Registro';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthToken } from 'src/app/modules/modelos/AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  registroUrl = "Login/Registro"
  loginUrl = "Login/Autenticar"
  private ingresar: boolean = false;

  constructor(private http: HttpClient) { }

  // public registro(user: Registro): Observable<AuthToken> {
  //   return this.http.post<AuthToken>(`${environment.apiUrl}/${this.registroUrl}`, user);
  // }

  public logIn(user: Login): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${environment.apiUrl}/${this.loginUrl}`, user);
  }

  // public ingresarAplicativo(obj: any): boolean {
  //   this.ingresar = obj.usuario == 'ana' && obj.password == '12345678';
  //   return this.ingresar
  // }

  // public habilitarlogueo() {
  //   return this.ingresar;
  // }

  public cargar( archivos: string[]){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = './assets/js/'+archivo+'.js';
      let body = document.getElementsByTagName('body')[0];
      body.appendChild(script);
    }
  }
}
