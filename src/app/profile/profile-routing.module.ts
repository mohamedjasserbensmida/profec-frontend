import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {UsersaccountComponent} from "./usersaccount/usersaccount.component";

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'usersManagement',component:UsersaccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
