import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroService } from "./hero.service";


const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroesRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    HeroService
  ]
})
export class HeroesRoutingModule { }
