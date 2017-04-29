import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FilmsService } from "../films.service";
import { Film } from "../film";


@Component({
  selector: 'omdb-film-films-list',
  templateUrl: './films-list.component.html'
})
export class FilmsListComponent implements OnInit {

  films: Film[] = [];

  titleValue: any;

  filmFormControl = new FormControl();

  searchResult: string = "";
  count: number = 1;

  disabledNextButton: boolean = true;

  disabledPrevButton: boolean = true;

  isDone: boolean = true;

  constructor(private filmService: FilmsService) {
    if (this.count === 1) {
      this.disabledPrevButton = false
    }
  }

  ngOnInit() {
    this.filmFormControl.valueChanges
      .debounceTime(200)
      .subscribe(newValue => {
          this.isDone = false;
          this.titleValue = newValue;
          this.filmService.getFilms(newValue)
            .subscribe(
              data => {
                if (data.Response !== 'False') {
                  const myArr = [];
                  for (let key in data) {
                    myArr.push(data[key])
                  }
                  this.searchResult = `Result for "${this.titleValue}"`;
                  this.count = 1;
                  this.disabledNextButton = true;
                  this.films = myArr[0];
                  this.isDone = true;
                } else {
                  this.isDone = true;
                  this.films = null;
                  this.searchResult = `"${this.titleValue}" Not Found or needs to be more specific`;
                  console.log("Not Found")
                }
              }
            )
        }
      )
  }

  onNext(){
    if (this.count >= 1) {
      this.disabledPrevButton = true
    }
      this.count++;
    this.filmService.getNextFilms(this.titleValue, this.count)
      .subscribe(
        data => {
          if (data.Response !== 'False'){
            const myArr = [];
            for (let key in data){
              myArr.push(data[key])
            }
            this.films = myArr[0]
          }else {
            console.log("Not Found");
            this.disabledNextButton = false
          }
        }
      )
  }

  onPrevious(){
    if (this.count <= 2){
      this.disabledPrevButton = false
    }
    this.count--;
    this.filmService.getNextFilms(this.titleValue, this.count)
      .subscribe(
        data => {
          if (data.Response !== 'False'){
            const myArr = [];
            for (let key in data){
              myArr.push(data[key])
            }
            this.films = myArr[0];
            this.disabledNextButton = true
          }else {
            console.log("Not Found");
          }
        }
      )
  }
}
