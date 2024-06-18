/// <reference types="cypress" />

class MyAccountPage {
    navigateToMyAccount() {
      cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click();
      cy.get('.list-group > .active').click();
    }
  
    fillLoginFormAndSubmit(email, password) {
      cy.get('#input-email').type(email);
      cy.get('#input-password').type(password);
      cy.get('form > .btn').click();
    }
  
    verifyMyAccountHeader() {
      cy.get(':nth-child(1) > .card-header').should('have.text', 'My Account');
    }
  }
  
  export default MyAccountPage;
  