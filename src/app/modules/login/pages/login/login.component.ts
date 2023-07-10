import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';
import { Login } from 'src/app/modules/modelos/Login';
import { Registro } from 'src/app/modules/modelos/Registro';
import { AuthToken } from 'src/app/modules/modelos/AuthToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup;
  loginDto = new Login();
  registroDto = new Registro();
  authTokenDto!: AuthToken;

  constructor(private fb: FormBuilder, private loginAuth: AutenticacionService,
    private routerprd: Router) { }

  // registro(registroDto:Registro){
  //   this.loginAuth.registro(registroDto).subscribe();
  // }

  login(loginDtomt: Login) {
    this.loginAuth.logIn(loginDtomt).subscribe((authTokenD) => {
      localStorage.setItem('token', authTokenD.token);
    });
  }

  ngOnInit(): void {
    this.loginAuth.cargar(['animacionLogin']);
    this.myForm = this.createMyForm();
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

    if (localStorage.getItem("token") == null) {
      alert("Usuario o contraseña incorrecto");
    } else {
      this.routerprd.navigateByUrl("/admin/users");
    }
  }

  public get f(): any {
    return this, this.myForm.controls;
  }
}
