exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "bsuser_AK953w",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "nByyvq6VqcQRyv1yGeyE",

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
        "bs://3308200c78782aab489e1b401f8f95545abdd298",
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
