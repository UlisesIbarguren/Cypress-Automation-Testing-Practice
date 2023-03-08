class EcommercePage {
    visit() {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
    }
  
    searchProduct(product) {
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type(product)
      cy.get('.type-text').click()
    }
  
    selectProduct() {
      cy.get('#mz-product-grid-image-45-212469 > .carousel-inner > .active > .lazy-load').click()
    }
  
    addToCart() {
      cy.get('#entry_216843 > .text').click()
    }
  
    fillLoginForm(email, password) {
        cy.get('#checkout-login').invoke('show')
        cy.get('#input-login-email').type(email)
        cy.get('#input-login-password').type(password)
        cy.get('#button-login').click()
    }
  
    fillPersonalInfo(firstname, lastname, company, address, city, postcode, country, zone) {
        cy.wait(1000)
        cy.get('#input-payment-firstname').click().type(firstname)
        cy.get('#input-payment-lastname').click().type(lastname)
        cy.get('#input-payment-company').scrollIntoView().click({force: true}).type(company)
        cy.get('#input-payment-address-1').scrollIntoView().click({force: true}).type(address)
        cy.get('#input-payment-city').scrollIntoView().click().type(city, { force: true })
        cy.get('#input-payment-postcode').scrollIntoView().click({force: true}).type(postcode, { force: true })
        cy.get('#input-payment-country').select(country)
        cy.get('#input-payment-zone').select(zone)
    }
  
    agreeTermsAndConditions() {
      cy.get(':nth-child(6) > .custom-control-label').click()
    }
  
    saveOrder() {
      cy.get('#button-save').click()
    }
  
    confirmOrder() {
        //cy.wait(5000) // wait for 5 seconds
        cy.get('#button-confirm').scrollIntoView().click()
    }
      
  
    verifyOrderConfirmation() {
      cy.get('.page-title').should('have.text', ' Your order has been placed!')
    }
  }
  
  export default EcommercePage
  