import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


import { HeroComponent } from "./Hero/hero.component";
import { ListComponent } from "./List/list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule{}
