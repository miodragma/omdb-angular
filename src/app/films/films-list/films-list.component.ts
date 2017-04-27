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

  isTrue: boolean;

  filmFormControl = new FormControl();

  constructor(private filmService: FilmsService ) { }

  ngOnInit() {
    this.filmFormControl.valueChanges
      .debounceTime(700)
      .subscribe(newValue => {
        this.titleValue = newValue;
          this.filmService.getFilms(newValue)
            .subscribe(
              data => {
                this.isTrue = false;
                if (data.Response !== 'False'){
                  const myArr = [];
                  for (let key in data){
                    myArr.push(data[key])
                  }
                  this.count = 1;
                  this.disabledButton = true;
                  this.films = myArr[0]
                }else {
                  this.isTrue = true;
                  console.log("Not Found")
                }
              }
            )
          }
      )
  }

  count: number = 1;

  disabledButton: boolean = true;

  onNext(){
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
            console.log("Not Found")
            this.disabledButton = false
          }
        }
      )
  }
}
