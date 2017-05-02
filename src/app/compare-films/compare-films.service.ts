import { Injectable } from '@angular/core';
import { Film } from '../films/film';

@Injectable()
export class CompareFilmsService {

  private compareFilms: Film[] = [];

  filmsLength = 0;

  getCompareFilms() {
    return this.compareFilms;
  }

  addFilms(compareFilms: Film) {
    this.compareFilms.push(compareFilms);
    this.filmsLength = this.compareFilms.length;
  }

  removeFilmsLength(length: number) {
    this.filmsLength = length;
  }

  getFilmsLength() {
    return this.filmsLength;
  }

}
