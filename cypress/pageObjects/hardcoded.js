/// <reference types="cypress" />

class ShopByCategory {
    selectShopByCategory() {
        cy.visit('https://ecommerce-playground.lambdatest.io/');
        cy.get('#entry_217833 > .icon-left > .icon').click()
    };
    selectLaptops() {
        cy.get('#widget-navbar-217841 > .navbar-nav > :nth-child(6) > .icon-left > .info > .title').click()
    };
    selectLaptopsTitle() {
        cy.get('#entry_212392 > .h4').click().should('have.text', 'Laptops');
    }
  }
  
  export default ShopByCategory;
  