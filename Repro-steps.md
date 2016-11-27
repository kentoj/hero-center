# Steps to Reproduce Repository

### Note
Commit after each step as needed.

## Steps
1. Install Node:        6.2.2 
2. Install NPM:         3.10.4+
3. Install Angular CLI: 1.0.0-beta.19-3
4. Install Yarn:        0.17.9 (optional)
5. `ng new hero-center --skip-npm`
6. `cd hero-center`
7. `yarn` (or `npm install` if using npm) and change default port in package.json start script.
8. Open browser to https://angular.io/resources/live-examples/router/ts/plnkr.html
9. Copy styles.css information from Plunker example to styles.css
10. `ng g m heroes`
11. `ng g m heroes/heroes-routing`
12. `mv src/app/heroes/heroes-routing/heroes-routing.module.ts src/app/heroes`
13. `rm -rf src/app/heroes/heroes-routing`
14. `ng g cl app-routing.module`
15. Update Heroes files from the Plunker example:
- app.component.html
- app.component.ts
- app.module.ts
- app-routing.module.ts
- heroes.module.ts
- heroes-routing.module.ts
16. Generate the Hero components and update routing config
- `ng g c heroes/hero-list`
- `ng g c heroes/hero-detail`
17. Generate the heroes service and add to providers
- `ng g s heroes/hero`
18. Update Hero service and components from Plunker example
- hero.service.ts
- hero-list.component.html
- hero-list.component.ts
- hero-detail.component.html
- hero-detail.component.ts
- heroes.module.ts
19. Generate the admin module and components
- `ng g m admin`
- `ng g c admin/admin-dashboard`
