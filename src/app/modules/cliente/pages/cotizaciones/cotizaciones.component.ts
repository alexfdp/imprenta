import { Component } from '@angular/core';
import { PublicService } from '../../services/public.service';
import { CotizacionCliente } from 'src/app/modelos/CotizacionCliente';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss']
})
export class CotizacionesComponent {

  cotizaciones!: CotizacionCliente[];

  constructor(private _publicService: PublicService) { }

  ngOnInit(): void {
    this._publicService.getCotizaciones().subscribe({
      next: (data) => {
        if (data != null) {
          this.cotizaciones = data;
        } else {
          console.log("No hay datos");
        }
      },
      error: (response) => {
        console.log("Error al consultar con la BD")
      }
    })
  }

}
