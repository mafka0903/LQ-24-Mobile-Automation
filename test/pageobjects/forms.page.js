class FormsPage {
  get formsTab() {
    return $("~Forms");
  }

  get inputText() {
    return $(`~text-input`);
  }

  get inputTextResult() {
    return $("~input-text-result");
  }

  get switchBtn() {
    return $("~switch");
  }

  get switchText() {
    return $("~switch-text");
  }

  get dropdownBtn() {
    return $("~Dropdown");
  }

  get dropdownOpen() {
    return $('android=new UiSelector().text("Select an item...")');
  }

  async clickFormsTab() {
    await this.formsTab.click();
  }

  async enterinputText(text) {
    await this.inputText.setValue(text);
  }

  async toggleSwitch() {
    await this.switchBtn.click();
  }

  async selectDropdownBtn() {
    await this.dropdownBtn.click();
  }
}

module.exports = new FormsPage();
