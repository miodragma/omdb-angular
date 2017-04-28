import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omdb-film-header',
  templateUrl: './header.component.html',
  styles: [`
    pushContent{
      margin-bottom: 550%;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
