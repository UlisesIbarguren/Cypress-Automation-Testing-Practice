import EcommercePage from "../pageObjects/ecommerce";

describe('template spec', () => {
  const ecommercePage = new EcommercePage()
  it('Adds a Product to the Whishlist', () => {
    const baseUrl = Cypress.env('baseUrl')
    cy.visit(baseUrl);
    ecommercePage.searchProduct('MacBook Pro');
    ecommercePage.selectProduct()
    ecommercePage.askQuestion()
  })
})