import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/modelos/Login';
import { Registro } from 'src/app/modelos/Registro';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthToken } from 'src/app/modelos/AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  registroUrl = "Login/Registo"
  loginUrl = "Login/Autenticar"
  private ingresar: boolean = false;

  constructor(private http: HttpClient) { }

  public registro(user: Registro): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/${this.registroUrl}`, user);
  }

  public logIn(user: Login): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${environment.apiUrl}/${this.loginUrl}`, user);
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
