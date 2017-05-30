import { ProjectfolderPage } from './app.po';

describe('projectfolder App', () => {
  let page: ProjectfolderPage;

  beforeEach(() => {
    page = new ProjectfolderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
