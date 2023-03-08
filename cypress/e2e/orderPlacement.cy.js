/// <reference types="Cypress" />

import EcommercePage from '../pageObjects/ecommerce'
import data from '../fixtures/paymentData.json'

describe('Places an order for ten different countries', () => {
  const ecommercePage = new EcommercePage()

  beforeEach(() => {
    cy.login('ulises.ibarguren@gmail.com', 'Password_1980')
    ecommercePage.visit()
  })

  Object.keys(data).forEach((country) => {
    it(`Purchases a MacBook Pro for ${country}`, () => {
      ecommercePage.visit()
      ecommercePage.searchProduct('MacBook Pro')
      ecommercePage.selectProduct()
      ecommercePage.addToCart()
      ecommercePage.fillLoginForm('ulises.ibarguren@gmail.com', 'Password_1980')
      ecommercePage.fillPersonalInfo(
        'Ulises',
        'Ibarguren',
        'My Company',
        'My Address 666',
        'My City',
        '6666',
        data[country].country,
        data[country].zone
      )
      ecommercePage.agreeTermsAndConditions()
      ecommercePage.saveOrder()
      ecommercePage.confirmOrder()
      ecommercePage.verifyOrderConfirmation()
    })
  })

  afterEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })
})
