import { Routes } from "@angular/router";

import { FilmsStartComponent } from "./films-start.component";
import { FilmsDetailComponent } from "./films-detail/films-detail.component";
import { EpisodesComponent } from "./episodes/episodes.component";

export const FILMS_ROUTES: Routes = [
  { path: '', component: FilmsStartComponent },
  { path: ':id', component: FilmsDetailComponent },
  { path: ':id/:season', component: EpisodesComponent },
  { path: ':id/:season', component: FilmsDetailComponent },
];
