import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from '../login/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { loginRoutingModule } from "./login-routing.module";
import { RegistroComponent } from './pages/registro/registro.component';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        LoginComponent,
        RegistroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        loginRoutingModule,
        SharedModule
    ]
})
export class loginModule {

}