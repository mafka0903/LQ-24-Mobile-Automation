const { config } = require("./wdio.conf");

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;

config.capabilities = [
  {
    project: "Pixel 3 Tests",
    build: "Pixel Build",
    name: "pixel_test",
    device: "Google Pixel 3",
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID,
    "browserstack.debug": true,
  },
];

exports.config = config;
