class RegistrationPage {
  visit() {
    const baseUrl = 'https://ecommerce-playground.lambdatest.io';
    const registerUrl = `${baseUrl}/index.php?route=account/register`;
    cy.visit(baseUrl);
    cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click();
    cy.get(`.list-group > [href="${registerUrl}"]`).click();
  }

  fillForm({ firstName, lastName, email, telephone, password }) {
    cy.get('#input-firstname').type(firstName);
    cy.get('#input-lastname').type(lastName);
    cy.get('#input-email').type(email);
    cy.get('#input-telephone').type(telephone);
    cy.get('#input-password').type(password);
    cy.get('#input-confirm').type(password);
    cy.get('.float-right > .custom-control > .custom-control-label').click();
    cy.get('.float-right > .btn').click();
  }

  getConfirmationMessage() {
    return cy.get('.page-title');
  }
}

export default new RegistrationPage();
