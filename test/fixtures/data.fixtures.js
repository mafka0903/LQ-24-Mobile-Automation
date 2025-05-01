const { faker } = require("@faker-js/faker");

module.exports = {
  DataForSingUpAndLogin: {
    email: faker.internet.email(),
    password: faker.internet.password({ length: 8 }),
  },
  DataForInputField: {
    inputText: faker.color.human(),
  },
};
