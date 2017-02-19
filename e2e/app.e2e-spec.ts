import { SmcntyrComPage } from './app.po';

describe('smcntyr-com App', function() {
  let page: SmcntyrComPage;

  beforeEach(() => {
    page = new SmcntyrComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
