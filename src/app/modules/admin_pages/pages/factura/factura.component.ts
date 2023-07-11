import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const day = today.getDate();

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, day - 7)),
    end: new FormControl(new Date(year, month, day)),
  });
}