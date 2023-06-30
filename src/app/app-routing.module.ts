import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './layout/publico/sesion/sesion.component';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';
import { BienvenidaComponent } from './layout/publico/bienvenida/bienvenida.component';

const routes: Routes = [{
  path: 'admin', component: ContenidoComponent, loadChildren: () => import('src/app/modules/admn/admn.module').then(m => m.AdmnModule)
},
{
  path: 'sinsesion', component: SesionComponent, loadChildren: () => import('./modules/login/login.module').then(m => m.loginModule)
},
{
  path: 'bienvenida', component: BienvenidaComponent, loadChildren: () => import('./modules/principal/principal.module').then(m => m.principalModule)
},
{
  path: "", pathMatch: 'full', redirectTo: 'bienvenida/pri'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
