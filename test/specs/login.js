const LoginPage = require("../pageobjects/login.page");
const testData = require("../fixtures/data.fixtures");

describe("Login screen", () => {
  it("ma-2 should login with valid credentials", async () => {
    await LoginPage.login(
      testData.DataForSingUpAndLogin.email,
      testData.DataForSingUpAndLogin.password
    );
    await LoginPage.messageSuccess.waitForExist({ timeout: 5000 });
    await expect(LoginPage.messageSuccess).toBeDisplayed();
  });
});
