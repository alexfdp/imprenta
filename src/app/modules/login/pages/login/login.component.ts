import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginAuth: AutenticacionService,
    private routerprd: Router) { }

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
    if (!this.loginAuth.ingresarAplicativo(this.myForm.value)) {
      alert("Usuario o contraseña incorrecto");
    } else {
      this.routerprd.navigateByUrl("/admin/admin");
    }
  }

  public get f(): any {
    return this, this.myForm.controls;
  }
}
