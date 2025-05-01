exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "bsuser_Y4oO0e",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "Ccey66kwqrP9LTz675RG",

  updateJob: false,
  specs: ["./test/specs/**.js"],
  exclude: [],

  capabilities: [
    {
      project: "First Webdriverio Android Project",
      build: "Webdriverio Android",
      name: "first_test",
      device: "Google Pixel 3",
      os_version: "9.0",
      app:
        process.env.BROWSERSTACK_APP_ID ||
        "bs://cf9052a35ccf26a6f24eebc1864e9c29b5827461",
      "browserstack.debug": true,
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
