import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu'; // Importez le module TabMenu
import { TabViewModule } from 'primeng/tabview'; // Importez le module TabViewModule

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputMaskModule} from "primeng/inputmask";
import {ToastModule} from "primeng/toast";
import {PasswordModule} from "primeng/password";
import { UsersaccountComponent } from './usersaccount/usersaccount.component';
import {TableModule} from "primeng/table";
import {InputTextareaModule} from "primeng/inputtextarea";


@NgModule({
  declarations: [
    ProfileComponent,
    UsersaccountComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ButtonModule,
        RippleModule,
        DialogModule,
        InputTextModule,
        FormsModule,
        InputMaskModule,
        ToastModule,
        ReactiveFormsModule,
        PasswordModule,
        TableModule,
        InputTextareaModule,
        TabMenuModule,
        TabViewModule
    ]
})
export class ProfileModule { }
