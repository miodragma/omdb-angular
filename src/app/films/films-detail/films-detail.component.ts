import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { Subscription} from "rxjs/Subscription";

import { Film } from "../film";
import { FilmsService } from "../films.service";
import { CompareFilmsService } from "../../compare-films/compare-films.service";


@Component({
  selector: 'omdb-film-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.css']
})
export class FilmsDetailComponent implements OnInit, OnDestroy {

 selectedFilm: Film;
 private filmsIndex: any;
 private subscription: Subscription;
 seasons: number[] = [];
 addToCompare: string = "is not added to Compare List";
 isAdd: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmsService: FilmsService,
    private compareFilms: CompareFilmsService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.filmsIndex = params['id'];
        this.filmsService.getDetails(this.filmsIndex).subscribe(
          data => {
            if (data.Type === 'series'){
              const myArr = [];
              for (let i = 1; i <= +data.totalSeasons; i++){
                myArr.push(i)
              }
              this.seasons = myArr;
            }
            this.isAdd = !this.isAdd
            this.addToCompare = "is not added to Compare List";
            this.selectedFilm = data
          }
        )
      }
    )
  }

  onAddToCompareList(){
    this.isAdd = !this.isAdd
    this.addToCompare = "has been added successfully to Compare List";
    this.compareFilms.addFilms(this.selectedFilm)
  }

  onSelectedSeasons(season: any){
    this.router.navigate(['/films', this.filmsIndex, season])
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
