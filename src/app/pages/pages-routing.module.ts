import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'departements',
        loadChildren: () => import("./departements/departements.module").then((m) => m.DepartementsModule)
      },
      {
        path:'employees',
        loadChildren: () => import("./employees/employees.module").then((m) => m.EmployeesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
