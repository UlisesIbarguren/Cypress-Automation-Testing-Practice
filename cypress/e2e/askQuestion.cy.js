import EcommercePage from "../pageObjects/ecommerce";

describe('template spec', () => {
  const ecommercePage = new EcommercePage();

  it('Adds a Product to the Wishlist', () => {
    const baseUrl = Cypress.env('baseUrl');
    cy.visit(baseUrl);
    
    ecommercePage.searchProduct('MacBook Pro');
    ecommercePage.selectProduct();

    // Define the test data
    const testData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Product Inquiry',
      enquiry: 'I would like to know more about the product.'
    };

    ecommercePage.askQuestion(testData.name, testData.email, testData.subject, testData.enquiry);
  });
});
