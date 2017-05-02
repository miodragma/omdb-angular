import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omdb-film-not-found',
  template: `
    <h1>
      Page Not Found!
    </h1>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
