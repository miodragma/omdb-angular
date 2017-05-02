import { Component, OnInit } from '@angular/core';
import { CompareFilmsService } from './compare-films.service';
import { Film } from '../films/film';

@Component({
  selector: 'omdb-film-compare-films',
  templateUrl: './compare-films.component.html',
  styleUrls: ['./compare-films.component.css']
})
export class CompareFilmsComponent implements OnInit {

  compareFilms: Film[] = [];

  constructor(private compareFilmsService: CompareFilmsService) { }

  ngOnInit() {
    this.compareFilms = this.compareFilmsService.getCompareFilms();
  }

  onDelete(compareFilm: number) {
    this.compareFilmsService.removeFilmsLength(this.compareFilms.length - 1);
    this.compareFilms.splice(compareFilm, 1);
  }
}
