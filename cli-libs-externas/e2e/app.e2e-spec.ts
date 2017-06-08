import { CliLibsExternasPage } from './app.po';

describe('cli-libs-externas App', () => {
  let page: CliLibsExternasPage;

  beforeEach(() => {
    page = new CliLibsExternasPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
