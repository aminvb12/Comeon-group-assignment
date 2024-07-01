const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false, //disable video recording
  videoCompression: false,
  e2e: {
    baseUrl: "http://localhost:9000",
    reporter: "cypress-mochawesome-reporter",
    timeout: 20000,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    requestTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);

      const configWithDotenv = require("dotenv").config({ path: ".env.local" });
      if (configWithDotenv.error) {
        throw configWithDotenv.error;
      }
      const env = { ...config.env, ...configWithDotenv.parsed };
      const result = { ...config, env };
      return result;
    },
  },
});
