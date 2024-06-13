const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's73hsm',
  env: {
    email: 'ulises.ibarguren@gmail.com',
    password: 'Password_1980',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
