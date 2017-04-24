import { Injectable } from '@angular/core';
import { Film } from "../films/film";

@Injectable()
export class CompareFilmsService {

  private compareFilms: Film[] = [];

  constructor() { }

  getCompareFilms(){
    return this.compareFilms
  }

  addFilms(compareFilms: Film){
    this.compareFilms.push(compareFilms)
  }

}
