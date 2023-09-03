import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementsRoutingModule } from './departements-routing.module';
import { DepartementsComponent } from './departements.component';


@NgModule({
  declarations: [
    DepartementsComponent
  ],
  imports: [
    CommonModule,
    DepartementsRoutingModule
  ]
})
export class DepartementsModule { }
