import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const day = today.getDate();

export interface Transaction {
  item: string;
  cost: number;
}

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
  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
    {item: 'Swim suit', cost: 15},
    {item: 'Swim suit', cost: 15},
    {item: 'Swim suit', cost: 15},
    {item: 'Swim suit', cost: 15},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}