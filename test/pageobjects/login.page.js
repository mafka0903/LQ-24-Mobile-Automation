class LoginPage {
  get singUpTab() {
    return $("~button-sign-up-container");
  }

  get loginTab() {
    return $(`~Login`);
  }

  get emailField() {
    return $("~input-email");
  }

  get passwordField() {
    return $("~input-password");
  }

  get passwordRepeatField() {
    return $("~input-repeat-password");
  }

  get loginButton() {
    return $("~button-LOGIN");
  }

  get singUpButton() {
    return $("~button-SIGN UP");
  }

  get messageSuccessLogin() {
    return $("id=android:id/alertTitle");
  }

  get messageSuccess() {
    return $("id=android:id/alertTitle");
  }

  async singUp(email, password, repeatpassword) {
    await this.loginTab.click();
    await this.singUpTab.click();
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.passwordRepeatField.setValue(repeatpassword);
    await this.singUpButton.click();
  }

  async login(email, password) {
    await this.loginTab.click();
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();
