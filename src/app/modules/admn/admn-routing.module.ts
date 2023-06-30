import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./pages/admin/admin.component";
import { DataComponent } from "./pages/data/data.component";

const rutas: Routes = [{
    path: '', children: [
        {path:'admin', component: AdminComponent},
        {path:'data',component:DataComponent}
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class admnRoutingModule {

}