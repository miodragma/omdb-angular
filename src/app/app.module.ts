import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FilmsComponent } from './films/films.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmsItemComponent } from './films/films-list/films-item.component';
import { FilmsService } from './films/films.service';
import { FilmsDetailComponent } from './films/films-detail/films-detail.component';
import { APP_ROUTES } from './app.routes';
import { EpisodesComponent } from './films/episodes/episodes.component';
import { EpisodesItemComponent } from './films/episodes/episodes-item.component';
import { CompareFilmsComponent } from './compare-films/compare-films.component';
import { CompareFilmsService } from './compare-films/compare-films.service';
import { FilmsStartComponent } from './films/films-start.component';
import { DropdownDirective } from './films/dropdown.directive';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './films/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmsComponent,
    FilmsListComponent,
    FilmsItemComponent,
    FilmsDetailComponent,
    EpisodesComponent,
    EpisodesItemComponent,
    CompareFilmsComponent,
    FilmsStartComponent,
    DropdownDirective,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTES,
    Ng2PageScrollModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    FilmsService,
    CompareFilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
