import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CrisisCenterHomeComponent } from "./crisis-center-home/crisis-center-home.component";
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisCenterComponent } from "./crisis-center.component";
import { CrisisDetailResolve } from "./crisis-detail-resolve.service";


const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            resolve: {
              crisis: CrisisDetailResolve
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolve
  ]
})
export class CrisisCenterRoutingModule {
}
