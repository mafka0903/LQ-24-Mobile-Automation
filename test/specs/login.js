const LoginPage = require("../pageobjects/login.page");

describe("Login screen", () => {
  it("ma-2 should login with valid credentials", async () => {
    await LoginPage.login("user@example.com", "ValidPass123");
    await LoginPage.messageSuccess.waitForExist({ timeout: 5000 });
    await expect(LoginPage.messageSuccess).toBeDisplayed();
  });
});
