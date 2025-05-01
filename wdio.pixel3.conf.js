const { config } = require("./wdio.conf");

config.user = process.env.BROWSERSTACK_USERNAME || "bsuser_Y4oO0e";
config.key = process.env.BROWSERSTACK_ACCESS_KEY || "Ccey66kwqrP9LTz675RG";

config.capabilities = [
  {
    project: "Pixel 3 Tests",
    build: "Pixel Build",
    name: "pixel_test",
    device: "Google Pixel 3",
    os_version: "9.0",
    app:
      process.env.BROWSERSTACK_APP_ID ||
      "bs://cf9052a35ccf26a6f24eebc1864e9c29b5827461",
    "browserstack.debug": true,
  },
];

exports.config = config;
