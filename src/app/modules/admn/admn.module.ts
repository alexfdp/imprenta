import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { DataComponent } from './pages/data/data.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { admnRoutingModule } from './admn-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    admnRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class AdmnModule { }
