const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalRunAllSpecs: true,
  e2e: {
     baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: "cypress/e2e/**/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
