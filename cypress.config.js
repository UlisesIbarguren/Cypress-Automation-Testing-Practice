const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's73hsm',
  env: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io/',
    email: 'ulises.ibarguren@gmail.com',
    password: 'Password_1980',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
