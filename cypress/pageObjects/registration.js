class RegistrationPage {
    visit() {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click();
      cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click();
    }
  
    fillForm(username) {
      cy.get('#input-firstname').type('user');
      cy.get('#input-lastname').type(username);
      cy.get('#input-email').type(`${username}@yopmail.com`);
      cy.get('#input-telephone').type('4444-6666');
      cy.get('#input-password').type('Password');
      cy.get('#input-confirm').type('Password');
      cy.get('.float-right > .custom-control > .custom-control-label').click();
      cy.get('.float-right > .btn').click();
    }
  
    getConfirmationMessage() {
      return cy.get('.page-title');
    }
  }
  
  export default new RegistrationPage();
  