import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";
import { VentasComponent } from "./pages/ventas/ventas.component";
import { PedidosComponent } from "./pages/pedidos/pedidos.component";
import { FacturaComponent } from "./pages/factura/factura.component";
import { AnalisisComponent } from "./pages/analisis/analisis.component";
import { ClientesComponent } from "./pages/clientes/clientes.component";
import { ProveedoresComponent } from "./pages/proveedores/proveedores.component";
import { MaterialesComponent } from "./pages/materiales/materiales.component";
import { EmpleadosComponent } from "./pages/empleados/empleados.component";
import { ProductosComponent } from "./pages/productos/productos.component";
const rutas: Routes = [{
    path: '', children: [
        { path: 'users', component: UsuariosComponent },
        { path: 'ventas', component: VentasComponent },
        { path: 'pedidos', component: PedidosComponent },
        { path: 'facturas', component: FacturaComponent },
        { path: 'analisis', component: AnalisisComponent },
        { path: 'clientes', component: ClientesComponent },
        { path: 'proveedores', component: ProveedoresComponent },
        { path: 'materiales', component: MaterialesComponent },
        { path: 'empleados', component: EmpleadosComponent },
        { path: 'productos', component: ProductosComponent }
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class admin_pagesRoutingModule {

}