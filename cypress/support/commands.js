Cypress.Commands.add('login', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'https://ecommerce-playground.lambdatest.io/login',
    form: true,
    body: {
      email,
      password
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
  })
})

  