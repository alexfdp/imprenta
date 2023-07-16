import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';
import { Login } from 'src/app/modelos/Login';
import { Registro } from 'src/app/modelos/Registro';
import { AuthToken } from 'src/app/modelos/AuthToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup;
  loginDto = new Login();
  authTokenDto!: AuthToken;

  constructor(private fb: FormBuilder, private loginAuth: AutenticacionService,
    private routerprd: Router) {
    const user = sessionStorage.getItem('token');
    if (user) this.routerprd.navigate(['/admin/users']);
  }

  login(loginDtomt: Login) {
    this.loginAuth.logIn(loginDtomt).subscribe({
      next: (authTokenD) => {
        localStorage.setItem('token', authTokenD.token);
        localStorage.setItem('name', authTokenD.name);
        localStorage.setItem('rol', authTokenD.rol);
        this.logI();
      },
      error: (response: any) => {
        alert("Usuario o contraseña incorrecto");
        console.log("error: " + response.error);
      }
    });
  }

  ngOnInit(): void {
    this.loginAuth.cargar(['animacionLogin']);
    this.myForm = this.createMyForm();
  }

  private logI() {
    const rol = localStorage.getItem('rol');
    if (rol == 'Administrador') this.routerprd.navigateByUrl("/admin/users");
    if (rol == 'Encargado') this.routerprd.navigateByUrl("/encargado/home");
    if (rol == 'Gerente') this.routerprd.navigateByUrl("/gerente/home");
    if (rol == 'Empleado') this.routerprd.navigateByUrl("/empleado/home");
    if (rol == 'Cliente') this.routerprd.navigateByUrl("/cliente/home");
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  public submitFormulario() {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
    }
    this.loginDto.usuario = this.myForm.value.usuario;
    this.loginDto.contrasena = this.myForm.value.password;
    this.login(this.loginDto);
  }

  public Registrarse() {
    this.routerprd.navigateByUrl("/sinsesion/registro")
  }

  public get f(): any {
    return this, this.myForm.controls;
  }
}