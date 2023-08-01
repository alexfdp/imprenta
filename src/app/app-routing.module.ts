import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './layout/publico/sesion/sesion.component';
import { MenuAdminComponent } from './layout/privado/menu-admin/menu-admin.component';
import { BienvenidaComponent } from './layout/publico/bienvenida/bienvenida.component';
import { MenuEncargadoComponent } from './layout/privado/menu-encargado/menu-encargado.component';
import { MenuGerenteComponent } from './layout/privado/menu-gerente/menu-gerente.component';
import { MenuEmpleadoComponent } from './layout/privado/menu-empleado/menu-empleado.component';
import { MenuClienteComponent } from './layout/privado/menu-cliente/menu-cliente.component';

const routes: Routes = [
  {
    path: 'sinsesion', component: SesionComponent, loadChildren: () => import('./modules/login/login.module').then(m => m.loginModule)
  },
  {
    path: 'bienvenida', component: BienvenidaComponent, loadChildren: () => import('./modules/principal/principal.module').then(m => m.principalModule)
  },
  {
    path: 'gerente', component: MenuGerenteComponent, loadChildren: () => import('./modules/gerente_pages/gerente-pages.module').then(m => m.GerentePagesModule)
  },
  {
    path: 'admin', component: MenuAdminComponent, loadChildren: () => import('./modules/admin_pages/admin_pages.module').then(m => m.admin_pagesModule)
  },
  {
    path: 'encargado', component: MenuEncargadoComponent, loadChildren: () => import('./modules/encargado/encargado.module').then(m => m.EncargadoModule)
  },
  {
    path: 'empleado', component: MenuEmpleadoComponent, loadChildren: () => import('./modules/empleados_pages/empleado-pages.module').then(m => m.EmpleadoPagesModule)
  },
  {
    path: 'cliente', component: MenuClienteComponent, loadChildren: () => import('./modules/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: "", pathMatch: 'full', redirectTo: 'bienvenida/pri'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
