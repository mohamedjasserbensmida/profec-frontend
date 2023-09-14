import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Auth/login/login.component";
import {RegisterComponent} from "./Auth/register/register.component";
import {HomepageComponent} from "./home/homepage/homepage.component";
import {AuthGuardGuard} from "./services/auth-guard.guard";
import {ForgotpasswordComponent} from "./Auth/forgotpassword/forgotpassword.component";
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgotpwd', component:ForgotpasswordComponent},
  {path:'home',component:HomepageComponent,/*canActivate:[AuthGuardGuard],*/children:[
      {path:'user',loadChildren:()=>import('./profile/profile.module').then(i=>i.ProfileModule)},
      {path:'conge',loadChildren:()=>import('./conge/conge.module').then(i=>i.CongeModule)},
      {path:'departements',loadChildren:()=>import('./departements/departements.module').then(i=>i.DepartementsModule)},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
