import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenubarModule,
    ButtonModule
  ]
})
export class HomeModule { }
