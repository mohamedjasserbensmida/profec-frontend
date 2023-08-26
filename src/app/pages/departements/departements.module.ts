import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementsRoutingModule } from './departements-routing.module';
import { DepartementsComponent } from './departements.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AddComponent } from './add/add.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    DepartementsComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    DepartementsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ]
})
export class DepartementsModule { }
