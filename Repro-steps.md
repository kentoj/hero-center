# Steps to Reproduce Repository

### Note
Commit after each step as needed.

## Steps
1. `ng new hero-center --skip-npm`
2. `cd hero-center`
3. `yarn` (or `npm install` if using npm) and change default port in package.json start script.
4. Open browser to https://angular.io/resources/live-examples/router/ts/plnkr.html
5. Copy styles.css information from Plunker example to styles.css
6. `ng g m heroes`
7. `ng g m heroes/heroes-routing`
8. `mv src/app/heroes/heroes-routing/heroes-routing.module.ts src/app/heroes`
9. `rm -rf src/app/heroes/heroes-routing`
10. `ng g cl app-routing.module`
11. Update Heroes files from the Plunker example:
  - app.component.html
  - app.component.ts
  - app.module.ts
  - app-routing.module.ts
  - heroes.module.ts
  - heroes-routing.module.ts
12. Generate the Hero components and update routing config
  - `ng g c heroes/hero-list`
  - `ng g c heroes/hero-detail`
13. Generate the heroes service and add to providers
  - `ng g s heroes/hero`
14. Update Hero service and components from Plunker example
  - hero.service.ts
  - hero-list.component.html
  - hero-list.component.ts
  - hero-detail.component.html
  - hero-detail.component.ts
  - heroes.module.ts
15. Generate the admin module and components
  - `ng g m admin`
  - `ng g c admin/admin-dashboard`
  - `ng g c admin/manage-heroes`
  - `ng g c cl admin/admin-routing.module`
16. Update Admin components from Plunker example
  - admin-dashboard.component.html
  - admin-dashboard.component.ts
  - admin.component.html
  - admin.module.ts
  - manage-heroes.component.ts
17. Add admin routing into application (leave out AuthGuard and login for now)
  - app-routing.module.ts
  - admin-routing.module.ts 
  - **This is the first point at which lazy loading can be observed in this app.**
18. Generate auth service, guard, login component, and routing
  - `ng g s auth`
  - `ng g cl auth-guard`
  - `ng g c login`
  - `ng g cl login-routing.module`
19. Update Auth and login components from Plunker example
  - auth.service.ts
  - auth-guard.ts
  - login.component.html
  - login.component.ts
  - login-routing.module.ts
20. Protect admin routes with AuthGuard
  - app-routing.module.ts
  - admin-routing.module.ts
  - **Now route navigation is protected with a guard**

### Bonus: Crisis Center
1. Generate Crisis center module, components, services, routing
  - `ng g m crisis-center`
  - `ng g s crisis-center/crisis`
  - `ng g c crisis-center/crisis-center-home`
  - `ng g c crisis-center/crisis-list`
  - `ng g c crisis-center/crisis-detail`
  - `ng g s crisis-center/crisis-detail-resolve`
  - `ng g cl crisis-center/crisis-center-routing.module`
  - `ng g s dialog`
2. Update crisis components from Plunker example.
  - crisis.service.ts
  - crisis-center-home.component.html
  - crisis-center-routing.module.ts
  - crisis-center.component.html
  - crisis-center.module.ts
  - crisis-detail-resolve.service.spec.ts
  - crisis-detail-resolve.service.ts
  - crisis-detail.component.css
  - crisis-detail.component.html
  - crisis-detail.component.ts
  - crisis-list.component.html
  - crisis-list.component.ts
3. Add routing to crisis module
  - app-routing.module.ts
  - **Now you can see the second bundle being lazily loaded. The bundles are named something like 0.chunk.js and 1.chunk.js**


### Second Bonus: Dockerized Deployment
1. Create the `Dockerfile`
2. Create the nginx default config to redirect all requests to the root '/' so every request will be handled by the Angular 2 router.

