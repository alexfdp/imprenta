import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";
import { VentasComponent } from "./pages/ventas/ventas.component";
import { PedidosComponent } from "./pages/pedidos/pedidos.component";
import { FacturaComponent } from "./pages/factura/factura.component";
import { InventarioComponent } from "./pages/inventario/inventario.component";
import { AnalisisComponent } from "./pages/analisis/analisis.component";
import { ClientesComponent } from "./pages/clientes/clientes.component";
const rutas: Routes = [{
    path: '', children: [
        { path: 'users', component: UsuariosComponent },
        { path: 'venta', component: VentasComponent },
        { path: 'pedidos', component: PedidosComponent },
        { path: 'facturas', component: FacturaComponent },
        { path: 'inventario', component: InventarioComponent },
        { path: 'analisis', component: AnalisisComponent },
        { path: 'clientes', component: ClientesComponent }
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class admin_pagesRoutingModule {

}