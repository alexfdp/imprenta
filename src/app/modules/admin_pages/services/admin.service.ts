import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/modelos/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  datosUsuariosUrl = "Admin/GetUsuarios"
  constructor(private http: HttpClient,private routerprd:Router) { }

  public getUsers() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.get<User[]>(`${environment.apiUrl}/${this.datosUsuariosUrl}`, { headers });
  }
  public regresar(){
    this.routerprd.navigateByUrl("/sinsesion/login");
  }
}
