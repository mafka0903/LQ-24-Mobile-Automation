const testData = require("../fixtures/data.fixtures");
const FormsPage = require("../pageobjects/forms.page");

describe("Forms screen", () => {
  beforeEach(async () => {
    await FormsPage.formsTab.waitForExist({ timeout: 5000 });
    await FormsPage.clickFormsTab();
  });
  it("ma-3 should type into input field and display result", async () => {
    const inputText = testData.DataForInputField.inputText;
    await FormsPage.enterinputText(inputText);
    await expect(FormsPage.inputTextResult).toHaveTextContaining(inputText);
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
