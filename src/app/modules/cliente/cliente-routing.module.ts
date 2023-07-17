import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteViewComponent } from "./pages/cliente-view/cliente-view.component";
import { HomeClienteComponent } from "./pages/home-cliente/home-cliente.component";
import { CotizarComponent } from "./pages/cotizar/cotizar.component";
import { PedidosComponent } from "./pages/pedidos/pedidos.component";

const rutas: Routes = [{
    path: '', children: [
        { path: 'home', component: HomeClienteComponent },
        { path: 'cotizar', component: CotizarComponent },
        { path: 'pedidos', component: PedidosComponent },
        { path: 'cli', component: ClienteViewComponent },
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class clienteviewRoutingModule {

}