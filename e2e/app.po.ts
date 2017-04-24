import { browser, element, by } from 'protractor';

export class FilmPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('omdbFilm-root h1')).getText();
  }
}
