const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  baseUrl: "http://todo-app-barkend.herokuapp.com/",
  specPattern: "cypress/e2e/**/*.cy.js",
  // specPattern: '**/*.js',
  },
});
