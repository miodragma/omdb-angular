import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../films.service';
import { Film } from '../film';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';


@Component({
  selector: 'omdb-film-episodes',
  templateUrl: './episodes.component.html'
})
export class EpisodesComponent implements OnInit, OnDestroy {

  title: string;
  titleSeason: string;
  isDone = false;

  episodes: Film[] = [];
  private subscription: Subscription;
  private episodeIndex: any;
  private episodeIdIndex: any;

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService,
    private location: Location
  ) { }

  ngOnInit() {
   this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.isDone = false;
        this.episodeIdIndex = params['id'];
        this.episodeIndex = params['season'];
        this.filmsService.getSeasons(this.episodeIdIndex, this.episodeIndex)
          .subscribe(
            data => {
              this.titleSeason = data.Season;
              this.title = data.Title;
              const myArr = [];
              for (const key in data) {
                if (data.hasOwnProperty(key)) {
                  myArr.push(data[key]);
                }
              }
              this.episodes = myArr[3];
              this.isDone = true;
            }
          );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClickedBack() {
    this.location.back();
  }

}
