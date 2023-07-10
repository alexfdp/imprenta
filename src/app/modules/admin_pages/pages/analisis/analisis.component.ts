import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { multi_line } from './data/data_line';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent {
  // Fechas
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  //Contenido de ngx bar
  single2 = [{
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }];


  view2: [number, number] = [500, 300];

  // options
  showXAxis2 = true;
  showYAxis2 = true;
  gradient2 = false;
  showLegend2 = true;
  showXAxisLabel2 = true;
  xAxisLabel2 = 'Country';
  showYAxisLabel2 = true;
  yAxisLabel2 = 'Population';

  colorSchemeBar: Color = {
    name: 'mySchemeBar',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect2(event: any) {
    console.log(event);
  }
  // Contendio de ngx_pie_charts 1
  single = [{
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  },
  {
    "name": "UK",
    "value": 6200000
  }
  ];
  view: [number, number] = [600, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



  //contenido grafico lines
  multi3 = multi_line;
  view3: [number, number] = [1200, 600];
  legend3: boolean = true;
  showLabels3: boolean = true;
  animations3: boolean = true;
  xAxis3: boolean = true;
  yAxis3: boolean = true;
  showYAxisLabel3: boolean = true;
  showXAxisLabel3: boolean = true;
  xAxisLabel3: string = 'fecha';
  yAxisLabel3: string = 'Population';
  timeline3: boolean = true;

  colorScheme3: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  onSelect3(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate3(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate3(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  // constructor(){
  //   Object.assign(this, { multi_line });
  // }
}
