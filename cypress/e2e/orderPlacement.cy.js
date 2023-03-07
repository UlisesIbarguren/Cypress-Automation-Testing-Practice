/// <reference types="Cypress" />

import data from '../fixtures/paymentData.json';

describe('Places an order for ten different countries', () => {
  beforeEach(() => {
    cy.login('ulises.ibarguren@gmail.com', 'Password_1980');
    cy.visit('https://ecommerce-playground.lambdatest.io/');
  });

  Object.keys(data).forEach((country) => {
    it(`Purchases a MacBook Pro for ${country}`, () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('MacBook Pro');
      cy.get('.type-text').click();
      cy.get('#mz-product-grid-image-45-212469 > .carousel-inner > .active > .lazy-load').click();
      cy.get('#entry_216843 > .text').click();
      cy.get('.form-group > :nth-child(1) > .custom-control-label').click();
      cy.get('#input-login-email').type('ulises.ibarguren@gmail.com');
      cy.get('#input-login-password').type('Password_1980');
      cy.get('#button-login').click();
      cy.get('#input-payment-firstname').click().type('Ulises');
      cy.get('#input-payment-lastname').click().type('Ibarguren');
      cy.get('#input-payment-company').click().type('My Company');
      cy.get('#input-payment-address-1').click().type('My Address 666');
      cy.get('#input-payment-city').type('My City', { delay: 100 });
      cy.get('#input-payment-postcode').type('6666');
      cy.wrap(data[country]).then((countryData) => {
        cy.get('#input-payment-country').select(countryData.country);
        cy.get('#input-payment-zone').select(countryData.zone);
      });
      cy.get(':nth-child(6) > .custom-control-label').click();
      cy.get('#button-save').click();
      cy.get('#button-confirm').scrollIntoView().click();
      cy.get('.page-title').should('have.text', ' Your order has been placed!');
    });
  });
});
