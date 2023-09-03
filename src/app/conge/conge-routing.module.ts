import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersreclamationComponent} from "./CongeEmploye/CongeEmployee.component";
import {CongemanagementComponent} from "./CongeAdmin/CongeAdmin.component";

const routes: Routes = [
  {path:'',component:UsersreclamationComponent},
  {path:'management',component:CongemanagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
  