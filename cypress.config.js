const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'afuubr',
  allowCypressEnv: false,
  e2e: {
    expose: {
      username: 'cypress',
    },
    env: {
      password: 'rocks',
    },
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
    },
  },
})
