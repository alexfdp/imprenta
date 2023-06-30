import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrincipalComponent } from './pages/principal/principal.component';
import { principalRoutingModule } from "./principal-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from "@angular/material/card";
import { PlantillaComponent } from './pages/plantilla/plantilla.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexModule } from "@angular/flex-layout/flex";
import { GridModule } from "@angular/flex-layout/grid";

@NgModule({
  declarations: [
    PrincipalComponent,
    PlantillaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    principalRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class principalModule {

}