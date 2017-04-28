import { Component, OnInit, Input } from '@angular/core';
import { CompareFilmsService } from "./compare-films.service";
import { Film } from "../films/film";

@Component({
  selector: 'omdb-film-compare-films',
  templateUrl: './compare-films.component.html',
  styleUrls: ['./compare-films.component.css']
})
export class CompareFilmsComponent implements OnInit {

  compareFilms: Film[] = [];

  isAdd: boolean = true;

  constructor(private compareFilmsService: CompareFilmsService) { }

  ngOnInit() {
    this.isAdd = false
    this.compareFilms = this.compareFilmsService.getCompareFilms()
  }

  onDelete(compareFilm: number){
    this.compareFilms.splice(compareFilm, 1)
  }

}
