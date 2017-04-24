import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { Film } from "../film";
import {FilmsService} from "../films.service";

@Component({
  selector: 'omdb-film-episodes-item',
  templateUrl: './episodes-item.component.html',
  styles: []
})
export class EpisodesItemComponent implements OnInit {

  @Input() episode: Film;

  constructor(private router: Router, private route:ActivatedRoute, private filmService: FilmsService) { }

  ngOnInit() {
  }

  onSelectedEpisode(value: any){
    this.router.navigate(['/films', value])
  }

}
