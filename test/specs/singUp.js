const LoginPage = require("../pageobjects/login.page");

describe("SingUp screen", () => {
  it("ma-1 sing up with valid credentials", async () => {
    await LoginPage.singUp("user@example.com", "ValidPass123", "ValidPass123");
    await LoginPage.messageSuccess.waitForExist({ timeout: 5000 });
    await expect(LoginPage.messageSuccess).toBeDisplayed();
  });
});
