import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class FilmsService {

  tit: string;

  constructor(private http: Http) { }

  getFilms(titleValue: any){
    return this.http.get(`https://www.omdbapi.com/?s=${titleValue}*`).map((response: Response) => response.json())
  }

  getNextFilms(titleValue: any, pageValue: number){
    return this.http.get(`https://www.omdbapi.com/?s=${titleValue}*&page=${pageValue}`).map((response: Response) => response.json())
  }

  getDetails(value: any){
    return this.http.get(`https://www.omdbapi.com/?i=${value}`).map((response: Response) => response.json())
  }

  getSeasons(idIndex: any, index: any){
    return this.http.get(`https://www.omdbapi.com/?i=${idIndex}&Season=${index}`).map((response: Response) => response.json())
  }

  getImdbLink(imdb: any){
    return `http://www.imdb.com/title/${imdb}/`
  }
}
