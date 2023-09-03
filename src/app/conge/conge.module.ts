import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './conge-routing.module';
import { UsersreclamationComponent } from './CongeEmploye/CongeEmployee.component';
import { CongemanagementComponent } from './CongeAdmin/CongeAdmin.component';
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RippleModule} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    UsersreclamationComponent,
    CongemanagementComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    ToastModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    RippleModule,
    DropdownModule
  ]
})
export class CongeModule { }
