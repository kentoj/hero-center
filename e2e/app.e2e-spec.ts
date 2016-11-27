import { HeroCenterPage } from './app.po';

describe('hero-center App', function() {
  let page: HeroCenterPage;

  beforeEach(() => {
    page = new HeroCenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
