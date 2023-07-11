import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from 'src/app/modelos/Registro';
import { LoginServicioService } from 'src/app/modules/login/services/login-servicio.service';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  registroDto = new Registro();
  public myFormReg !: FormGroup;

  constructor(private fb: FormBuilder, private loginservicio: LoginServicioService, private loginAuth: AutenticacionService) { }

  private createMyForm(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  registro(registroDt: Registro) {
    this.loginAuth.registro(registroDt).subscribe((val) => {
      if (val) {
        this.myFormReg.reset();
        alert("Registro exitoso. Regrese e inicie sesión");
        
      }else{
        alert("Error a registrar");
      }
    });
  }
  registrar() {
    this.registroDto.nombre = this.myFormReg.value.nombre;
    this.registroDto.apellido = this.myFormReg.value.apellido;
    this.registroDto.correo = this.myFormReg.value.correo;
    this.registroDto.usuario = this.myFormReg.value.usuario;
    this.registroDto.contrasena = this.myFormReg.value.contrasena;

    this.registro(this.registroDto);
  }

  ngOnInit(): void {
    this.loginservicio.cargar(['animacionReg']);
    this.myFormReg = this.createMyForm();
  }
}
