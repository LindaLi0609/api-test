const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log(config)
      config.defaultCommandTimeout=10000
      config.baseUrl='http://todo-app-barkend.herokuapp.com/'
      // config.env.ENVIRONMENT = 'test'
      // specPattern: "cypress/e2e/**/*.cy.js"
      return config 
  // baseUrl: "http://todo-app-barkend.herokuapp.com/",
  // specPattern: "cypress/e2e/**/*.cy.js",
  // specPattern: '**/*.js',
  },
  env:{
    baidu: 'https://www.baidu.com',
    google: 'https://www.google.com'
  }
}
})
