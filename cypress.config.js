const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');
const Mochawesome = require('cypress-mochawesome-reporter/plugin');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return getCompareSnapshotsPlugin(on, config);
      Mochawesome(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-report',
      reportFilename: 'report',
      quiet: true,
      overwrite: false,
      html: true,
      json: true
    },
  },
  
  video:true,
  screenshotOnRunFailure:true,
  retries:2
});
