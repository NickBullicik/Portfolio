import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  outputDir: 'tests/output/resultados',
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4331',
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'node tests/serve.mjs',
    url: 'http://localhost:4331',
    reuseExistingServer: true,
  },
});
