import { DiretivasPage } from './app.po';

describe('diretivas App', () => {
  let page: DiretivasPage;

  beforeEach(() => {
    page = new DiretivasPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
