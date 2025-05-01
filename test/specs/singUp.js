const LoginPage = require("../pageobjects/login.page");
const testData = require("../fixtures/data.fixtures");

describe("SingUp screen", () => {
  it("ma-1 sing up with valid credentials", async () => {
    await LoginPage.singUp(
      testData.DataForSingUpAndLogin.email,
      testData.DataForSingUpAndLogin.password,
      testData.DataForSingUpAndLogin.password
    );
    await LoginPage.messageSuccess.waitForExist({ timeout: 5000 });
    await expect(LoginPage.messageSuccess).toBeDisplayed();
  });
});
