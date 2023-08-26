import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from 'src/app/services/employees.service';
import { DepartementsService } from 'src/app/services/departements.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditComponent } from './edit/edit.component';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [
    EmployeesComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MatDialogModule
  ],
  providers: [ EmployeesService, DepartementsService]

})
export class EmployeesModule { }
