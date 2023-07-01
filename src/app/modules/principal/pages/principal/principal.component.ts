import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  constructor(private routerprd: Router){ }
  
  public abrirLogin(){
    this.routerprd.navigateByUrl("/sinsesion/login");
  }
}
