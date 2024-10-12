import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import * as os from 'os';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['dot'],
    [
      'allure-playwright',
      {
        detail: false,
        suiteTitle: false,
        outputFolder: 'allure-results',
        metadata: {
          project: 'Cloud',
        },
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
          framework: 'playwright',
        },
      },
    ],
  ],
  timeout: 30 * 1000,
  expect: {
    timeout: 15000,
  },
  use: {
    trace: 'on-first-retry',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: !!process.env.CI,
    viewport: { width: 1280, height: 1024 },
    testIdAttribute: 'data-qa',
    launchOptions: {
      slowMo: 60,
    },
  },
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'Портал администратора - Chrome desktop',
      use: {
        storageState: '.auth/admin.json',
        baseURL: process.env.CLOUD_ADMIN_DASHBOARD_URL,
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
      },
      dependencies: ['setup'],
    },
  ],
});
