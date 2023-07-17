import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrincipalComponent } from './pages/principal/principal.component';
import { principalRoutingModule } from "./principal-routing.module";
import { PlantillaComponent } from './pages/plantilla/plantilla.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    PrincipalComponent,
    PlantillaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    principalRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class principalModule {

}