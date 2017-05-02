import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Film } from '../film';

@Component({
  selector: 'omdb-film-episodes-item',
  templateUrl: './episodes-item.component.html',
  styles: []
})
export class EpisodesItemComponent implements OnInit {

  @Input() episode: Film;

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  onSelectedEpisode(title: string, value: any) {
    this.router.navigate(['/films', title, value]);
  }

}
