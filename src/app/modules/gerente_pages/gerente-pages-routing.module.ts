import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGerenteComponent } from './pages/home-gerente/home-gerente.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [{
  path: '', children: [
    { path: 'home', component: HomeGerenteComponent },
    { path: 'users', component: UserComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerentePagesRoutingModule { }
