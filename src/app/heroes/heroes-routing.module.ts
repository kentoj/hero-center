import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from "@angular/router";


const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HeroesRoutingModule { }
