/// <reference types="cypress" />

import EcommercePage from '../pageObjects/ecommerce';
import MyAccountPage from '../pageObjects/myAccount';

describe('My Account Page', () => {
  const ecommercePage = new EcommercePage();
  const myAccountPage = new MyAccountPage();

  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    ecommercePage.visit();
  });

  it('Visits My Account Page', () => {
    myAccountPage.navigateToMyAccount();
    myAccountPage.fillLoginFormAndSubmit(Cypress.env('email'), Cypress.env('password'));
    myAccountPage.verifyMyAccountHeader();
  });
});
