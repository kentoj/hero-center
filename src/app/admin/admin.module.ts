import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent, ManageHeroesComponent]
})
export class AdminModule { }
