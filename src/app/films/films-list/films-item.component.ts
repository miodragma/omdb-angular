import { Component, OnInit,  Input } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'omdb-film-films-item',
  templateUrl: './films-item.component.html',
  styles: []
})
export class FilmsItemComponent implements OnInit {

 @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }
}
