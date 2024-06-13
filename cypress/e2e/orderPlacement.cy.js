/// <reference types="Cypress" />

import EcommercePage from '../pageObjects/ecommerce'
import data from '../fixtures/paymentData.json'
import personalData from '../fixtures/personalData.json'

describe('Places an order for ten different countries', () => {
  const ecommercePage = new EcommercePage()

  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
    ecommercePage.visit()
  })

  Object.keys(data).forEach((country) => {
    it(`Purchases a MacBook Pro for ${country}`, () => {
      ecommercePage.visit()
      ecommercePage.searchProduct('MacBook Pro')
      ecommercePage.selectProduct()
      ecommercePage.addToCart()
      ecommercePage.fillLoginForm(Cypress.env('email'), Cypress.env('password'))
      ecommercePage.fillPersonalInfo(
        personalData.firstName,
        personalData.lastName,
        personalData.company,
        personalData.address,
        personalData.city,
        personalData.postalCode,
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
