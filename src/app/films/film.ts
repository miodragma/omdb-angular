import { Rating } from '../compare-films/rating';
export class Film {
  constructor(
    public Title: string,
    public Year: string,
    public Poster: string,
    public Rated: string,
    public Released: string,
    public Runtime: string,
    public Genre: string,
    public Director: string,
    public Writer: string,
    public Actors: string,
    public Plot: string,
    public Language: string,
    public Country: string,
    public Awards: string,
    public Metascore: string,
    public imdbRating: string,
    public imdbVotes: string,
    public imdbID: string,
    public Type: string,
    public Production: string,
    public Website: string,
    public totalSeasons: number,
    public Season: string,
    public Episodes: string,
    public Episode: string,
    public BoxOffice: string,
    public Ratings: Rating[]
  ){}
}
