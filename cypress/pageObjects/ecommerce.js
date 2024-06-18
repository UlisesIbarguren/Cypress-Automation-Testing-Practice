/// <reference types="cypress" />

class EcommercePage {
  visit() {
    cy.visit('https://ecommerce-playground.lambdatest.io/');
  }

  searchProduct(product) {
    cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type(product);
    cy.get('.type-text').click();
  }

  selectProduct() {
    cy.get('#mz-product-grid-image-62-212469 > .carousel-inner > .active > .lazy-load').click({ force: true });
  }

  addToCart() {
    cy.get('#entry_216843 > .text').click({ force: true });
  }

  fillLoginForm(email, password) {
    cy.get('#checkout-login').invoke('show');
    cy.get('#input-login-email').type(email);
    cy.get('#input-login-password').type(password);
    cy.get('#button-login').click({ force: true });
  }

  fillPersonalInfo(firstname, lastname, company, address, city, postcode, country, zone) {
    cy.wait(1000);
    cy.get('#input-payment-firstname').scrollIntoView().click({ force: true }).type(firstname);
    cy.get('#input-payment-lastname').scrollIntoView().click({ force: true }).type(lastname);
    cy.get('#input-payment-company').scrollIntoView().click({ force: true }).type(company);
    cy.get('#input-payment-address-1').scrollIntoView().click({ force: true }).type(address);
    cy.get('#input-payment-city').scrollIntoView().click({ force: true }).type(city, { force: true });
    cy.get('#input-payment-postcode').scrollIntoView().click({ force: true }).type(postcode, { force: true });
    cy.get('#input-payment-country').scrollIntoView().select(country);
    cy.get('#input-payment-zone').scrollIntoView().select(zone);
  }

  agreeTermsAndConditions() {
    cy.get(':nth-child(6) > .custom-control-label').scrollIntoView().click({ force: true });
  }

  saveOrder() {
    cy.get('#button-save').scrollIntoView().click({ force: true });
  }

  confirmOrder() {
    cy.get('#button-confirm').scrollIntoView().click({ force: true });
  }

  verifyOrderConfirmation() {
    cy.get('.page-title').should('have.text', ' Your order has been placed!');
  }

  askQuestion(name, email, subject, enquiry) {
    cy.get('#entry_216850 > .icon-left').scrollIntoView().click({ force: true });
    cy.get('form > :nth-child(1) > .form-control').type(name, { force: true });
    cy.get(':nth-child(2) > .form-control').type(email, { force: true });
    cy.get('.contact-form > form > :nth-child(3) > .form-control').type(subject, { force: true });
    cy.get('.contact-form > form > :nth-child(4) > .form-control').type(enquiry, { force: true });
    cy.get('form > .btn').click({ force: true });
    cy.get('.alert-success').should('have.text', ' Your enquiry has been successfully sent to the store owner! ×');
  }
}

export default EcommercePage;
