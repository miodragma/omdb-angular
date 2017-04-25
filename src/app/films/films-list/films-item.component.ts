import { Component, OnInit,  Input } from '@angular/core';
import { Film } from "../film";

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

  onClicked(){
    const winWidth = window.innerWidth;
    if (winWidth < 990){
      const itemView = document.getElementById('item')
        itemView.scrollIntoView({behavior: 'smooth'});
    }
  }

}
