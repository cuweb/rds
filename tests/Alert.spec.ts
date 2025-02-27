import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/components-alert--primary');

  // Wait for Storybook to load
  await page.waitForSelector('iframe#storybook-preview-iframe', { timeout: 30000 });

  // Ensure the alert inside the iframe is visible
  const frame = page.frameLocator('iframe#storybook-preview-iframe');
  await frame.locator('.cu-alert').waitFor({ timeout: 30000 }); // ✅ Corrected
});

test('should render the Alert component', async ({ page }) => {
  const frame = page.frameLocator('iframe#storybook-preview-iframe');
  const alert = frame.locator('.cu-alert');
  await expect(alert).toBeVisible();
});

test('should display the correct title', async ({ page }) => {
  const frame = page.frameLocator('iframe#storybook-preview-iframe');
  const title = frame.locator('.cu-alert p.font-semibold');
  await expect(title).toHaveText('Alert title');
});

test('should display the correct content', async ({ page }) => {
  const frame = page.frameLocator('iframe#storybook-preview-iframe');
  const content = frame.locator('.cu-alert p.text-cu-black-900');
  await expect(content).toHaveText('Records have been updated.');
});

test('should have success styling when type is success', async ({ page }) => {
  const frame = page.frameLocator('iframe#storybook-preview-iframe');
  const successAlert = frame.locator('.cu-alert--success');
  await expect(successAlert).toBeVisible();
});

test('should have the correct icon for each type', async ({ page }) => {
  const frame = page.frameLocator('iframe#storybook-preview-iframe');
  const successIcon = frame.locator('.cu-alert svg.w-6.h-6');
  await expect(successIcon).toBeVisible();
});
