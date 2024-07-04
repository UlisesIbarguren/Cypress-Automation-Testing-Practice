const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's73hsm',
  env: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io/',
    email: 'ulises.ibarguren@example.com',
    password: 'Password',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
