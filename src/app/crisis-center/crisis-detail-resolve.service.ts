import { Injectable } from '@angular/core';
import { Crisis, CrisisService } from "./crisis.service";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class CrisisDetailResolve implements Resolve<Crisis> {

  constructor(private cs: CrisisService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Crisis>|boolean {
    let id = route.params['id'];

    return this.cs.getCrisis(id).then(crisis => {
      if (crisis) {
        return crisis;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return false;
      }
    });
  }

}
