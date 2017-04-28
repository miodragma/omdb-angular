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

  searchResult: string = ""

  constructor(private filmService: FilmsService ) { }

  ngOnInit() {
    this.filmFormControl.valueChanges
      .debounceTime(50)
      .subscribe(newValue => {
        this.titleValue = newValue;
          this.filmService.getFilms(newValue)
            .subscribe(
              data => {
                if (data.Response !== 'False'){
                  const myArr = [];
                  for (let key in data){
                    myArr.push(data[key])
                  }
                  this.searchResult = `Result for "${this.titleValue}"`;
                  this.count = 1;
                  this.disabledButton = true;
                  this.films = myArr[0]
                }else {
                  this.searchResult = `"${this.titleValue}" Not Found or needs to be more specific`;
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
