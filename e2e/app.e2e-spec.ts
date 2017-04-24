import { FilmPage } from './app.po';

describe('omdbFilms App', () => {
  let page: FilmPage;

  beforeEach(() => {
    page = new FilmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('omdbFilm works!');
  });
});
