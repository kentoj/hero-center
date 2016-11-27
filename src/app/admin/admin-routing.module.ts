import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { ManageHeroesComponent } from "./manage-heroes/manage-heroes.component";
import { AdminComponent } from "./admin.component";


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
