import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmpleadoComponent } from './pages/home-empleado/home-empleado.component';
import { NominasComponent } from './pages/nominas/nominas.component';

const routes: Routes = [{
  path: '', children: [
    { path: 'home', component: HomeEmpleadoComponent },
    { path: 'nominas', component: NominasComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoPagesRoutingModule { }
