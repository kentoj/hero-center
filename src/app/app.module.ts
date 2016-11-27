import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeroesModule } from "./heroes/heroes.module";
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HeroesModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
