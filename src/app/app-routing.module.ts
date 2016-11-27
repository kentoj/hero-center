import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
