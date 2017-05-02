import { Component, DoCheck } from '@angular/core';

import { CompareFilmsService } from './compare-films/compare-films.service';

@Component({
  selector: 'omdb-film-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements DoCheck {

  isNavbarCollapsed = true;
  countLength: number;

  constructor(private compareFilmsService: CompareFilmsService ) {
  }


  ngDoCheck() {
     this.countLength = this.compareFilmsService.getFilmsLength();
  }


}
