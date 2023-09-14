import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DepartementsRoutingModule } from './departements-routing.module';
import { DepartementsComponent } from './departements.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RippleModule} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    DepartementsComponent
  ],
  imports: [
    CommonModule,
    DepartementsRoutingModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    RippleModule,
    DropdownModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class DepartementsModule { }
