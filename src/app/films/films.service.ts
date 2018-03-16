import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class FilmsService {

  constructor(private http: Http) { }

  getFilms(titleValue: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=8ed6e6d5&s=${titleValue}*`).map((response: Response) => response.json());
  }

  getNextFilms(titleValue: any, pageValue: number) {
    return this.http.get(`https://www.omdbapi.com/?apikey=8ed6e6d5&s=${titleValue}*&page=${pageValue}`).map((response: Response) => response.json());
  }

  getDetails(value: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=8ed6e6d5&i=${value}`).map((response: Response) => response.json());
  }

  getSeasons(idIndex: any, index: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=8ed6e6d5&i=${idIndex}&Season=${index}`).map((response: Response) => response.json());
  }
}
