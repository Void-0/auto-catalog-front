import { AutoCatalogPage } from './app.po';

describe('auto-catalog App', () => {
  let page: AutoCatalogPage;

  beforeEach(() => {
    page = new AutoCatalogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
