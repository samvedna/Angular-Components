import { ToDOPage } from './app.po';

describe('to-do App', () => {
  let page: ToDOPage;

  beforeEach(() => {
    page = new ToDOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
