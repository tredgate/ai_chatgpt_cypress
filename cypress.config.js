const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: "ai_jaro2024",
    password: "AITredgate24",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
