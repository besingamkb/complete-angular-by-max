import { CompleteGuideByMaxPage } from './app.po';

describe('complete-guide-by-max App', () => {
  let page: CompleteGuideByMaxPage;

  beforeEach(() => {
    page = new CompleteGuideByMaxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
