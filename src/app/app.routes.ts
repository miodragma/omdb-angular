import { RouterModule, Routes} from '@angular/router';
import { FILMS_ROUTES } from './films/films.routes';

import { FilmsComponent } from './films/films.component';
import { CompareFilmsComponent } from './compare-films/compare-films.component';
import { NotFoundComponent } from './films/not-found.component';

const APP_ROUTES_PROVIDERS: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent, children: FILMS_ROUTES },
  { path: 'compare-films', component: CompareFilmsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTES_PROVIDERS, {useHash: true});
