import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omdb-film-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  private isNavbarCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
