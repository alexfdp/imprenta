import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";
import { VentasComponent } from "./pages/ventas/ventas.component";
import { PedidosComponent } from "./pages/pedidos/pedidos.component";
const rutas: Routes = [{
    path: '', children: [
        { path: 'users', component: UsuariosComponent },
        { path: 'venta', component: VentasComponent },
        { path: 'pedidos', component: PedidosComponent },
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class admin_pagesRoutingModule {

}