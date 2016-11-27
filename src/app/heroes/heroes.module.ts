import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from "./heroes-routing.module";
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from "@angular/forms";
import { HeroService } from "./hero.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent,
    HeroListComponent,
    HeroDetailComponent],
  providers: [
    HeroService
  ]
})
export class HeroesModule {
}
