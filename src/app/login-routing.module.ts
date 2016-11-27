import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth-guard";
import { AuthService } from "./auth.service";


const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {
}
