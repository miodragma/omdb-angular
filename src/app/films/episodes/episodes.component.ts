import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FilmsService } from "../films.service";
import { Film } from "../film";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'omdb-film-episodes',
  templateUrl: './episodes.component.html'
})
export class EpisodesComponent implements OnInit, OnDestroy {

  title: string;
  titleSeason: string;

  episodes: Film[] = []
  private subscription: Subscription;
  private episodeIndex: any;
  private episodeIdIndex: any

  constructor(private router: Router, private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
   this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.episodeIdIndex = params['id']
        this.episodeIndex = params['season']
        this.filmsService.getSeasons(this.episodeIdIndex, this.episodeIndex)
          .subscribe(
            data => {
              this.titleSeason = data.Season
              this.title = data.Title
              const myArr = []
              for (let key in data){
                myArr.push(data[key])
              }
              this.episodes = myArr[3]
            }
          )
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
