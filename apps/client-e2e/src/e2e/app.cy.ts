import { getRouterOutlet } from '../support/app.po';

describe('AppComponent', () => {
  beforeEach(() => cy.visit('/'));

  it(`should render 'router-outlet'`, () => {
    getRouterOutlet().should('exist');
  });
});
