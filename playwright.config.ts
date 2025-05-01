import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  // 1 minute timeout
  timeout: 60000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ["html"],
    ["junit", { outputFile: "test-results/e2e-junit-results.xml" }],
    ["list"],
  ],
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "ui",
      testDir: "./tests/frontend",
      use: { ...devices["Desktop Chrome"] },
      testMatch: /.*\.spec\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "api",
      testDir: "./tests/backend",
      testMatch: /.*\.spec\.ts/,
    },
  ],
});
