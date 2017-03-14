import { EventerFrontendPage } from './app.po';

describe('eventer-frontend App', function() {
  let page: EventerFrontendPage;

  beforeEach(() => {
    page = new EventerFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
