import { RouterModule, Routes} from "@angular/router";

import { FilmsComponent } from "./films/films.component";
import { FILMS_ROUTES } from "./films/films.routes";
import { CompareFilmsComponent } from "./compare-films/compare-films.component";

const APP_ROUTES_PROVIDERS: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent, children: FILMS_ROUTES },
  { path: 'compare-films', component: CompareFilmsComponent }
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTES_PROVIDERS, {useHash: true});