import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription} from 'rxjs/Subscription';

import { Film } from '../film';
import { FilmsService } from '../films.service';
import { CompareFilmsService } from '../../compare-films/compare-films.service';
import { Location } from '@angular/common';


@Component({
  selector: 'omdb-film-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.css']
})
export class FilmsDetailComponent implements OnInit, OnDestroy {

 selectedFilm: Film;
 filmsIndex: any;
 private subscription: Subscription;
 seasons: number[] = [];
 addToCompare = 'is not added to Compare List';
 isAdd = false;
 isDone = false;
 linkToImdb: any;
 titleValue: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmsService: FilmsService,
    private compareFilms: CompareFilmsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.isDone = false;
        this.filmsIndex = params['id'];
        this.titleValue = params['q'];
        this.filmsService.getDetails(this.filmsIndex).subscribe(
          data => {
            if (data.Type === 'series') {
              const myArr = [];
              for (let i = 1; i <= +data.totalSeasons; i++) {
                myArr.push(i);
              }
              this.seasons = myArr;
            }
            this.addToCompare = 'is not added to Compare List';
            this.selectedFilm = data;
            this.isDone = true;
            this.isAdd = false;
            this.linkToImdb = `http://www.imdb.com/title/${this.filmsIndex}/`;
          }
        );
      }
    );
  }

  onAddToCompareList() {
    this.isAdd = !this.isAdd;
    this.addToCompare = 'has been added successfully to Compare List';
    this.compareFilms.addFilms(this.selectedFilm);
  }

  onSelectedSeasons(season: any) {
    this.router.navigate(['/films', this.titleValue, this.filmsIndex, season]);
  }

  onClickedBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
