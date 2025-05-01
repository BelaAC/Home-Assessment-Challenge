import { expect, Locator, Page } from "@playwright/test";
import { config } from "../utils/config";

export class LoginPage {
  readonly page: Page;
  readonly enterUsingPasswordButton: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterUsingPasswordButton = page.locator(
      "details[class='password-modal modal']"
    );
    this.passwordInput = page.locator("#Password");
    this.loginButton = page.locator("#login_form button[name='commit']");
  }

  async open() {
    await this.page.goto(config.baseUrl + "/password");
  }

  /**
   * Logs in to the application
   */
  async login() {
    await this.enterUsingPasswordButton.waitFor({ state: "visible" });
    await this.enterUsingPasswordButton.click();
    await this.passwordInput.waitFor({ state: "visible" });
    await this.passwordInput.fill(config.password);
    await this.loginButton.waitFor({ state: "visible" });
    await this.loginButton.click();
  }

  /**
   * Sets up the authentication for the tests
   * @param page - The page object
   */
  static async setupAuth(page: Page) {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login();
    await page.context().storageState({ path: config.authStoragePath });
    expect(page.url()).toBe(config.baseUrl);
  }
}
