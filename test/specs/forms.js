const FormsPage = require("../pageobjects/forms.page");

describe("Forms screen", () => {
  beforeEach(async () => {
    await FormsPage.clickFormsTab();
  });
  it("ma-3 should type into input field and display result", async () => {
    await FormsPage.enterinputText("one");
    await expect(FormsPage.inputTextResult).toHaveTextContaining("one");
  });

  it("ma-4 should toggle the switch ON and check text", async () => {
    await FormsPage.toggleSwitch();
    await expect(FormsPage.switchText).toHaveTextContaining("OFF");
  });

  it("ma-5 should verify dropdown selection", async () => {
    await FormsPage.selectDropdownBtn();
    await expect(FormsPage.dropdownOpen).toBeDisplayed();
  });
});
