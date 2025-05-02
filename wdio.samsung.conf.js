const { config } = require("./wdio.conf");

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;

config.capabilities = [
  {
    project: "Samsung Tests",
    build: "Samsung Build",
    name: "samsung_test",
    device: "Samsung Galaxy S21",
    os_version: "11.0",
    app: process.env.BROWSERSTACK_APP_ID,
    "browserstack.debug": true,
  },
];

exports.config = config;
