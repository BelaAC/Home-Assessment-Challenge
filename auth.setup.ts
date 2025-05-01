import { test as setup } from "@playwright/test";
import { LoginPage } from "./src/pages/LoginPage";

setup("Authenticate as valid user", async ({ page }) => {
  await LoginPage.setupAuth(page);
});
