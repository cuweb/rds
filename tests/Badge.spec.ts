import { test, expect } from '@playwright/test';

test.describe('Badge Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-badge--primary');

    // Ensure the Storybook iframe is fully loaded
    const frame = page.frameLocator('iframe#storybook-preview-iframe');
    await frame.locator('.cu-badge').waitFor({ state: 'visible', timeout: 15000 });
  });

  test('should render the badge correctly', async ({ page }) => {
    const frame = page.frameLocator('iframe#storybook-preview-iframe');
    const badge = frame.locator('.cu-badge');

    await expect(badge).toBeVisible();
  });

  test('should display the correct text', async ({ page }) => {
    const frame = page.frameLocator('iframe#storybook-preview-iframe');
    const badgeText = frame.locator('.cu-badge span');

    await expect(badgeText).toHaveText('Badge Example');
  });

  test('should have the correct color class', async ({ page }) => {
    const frame = page.frameLocator('iframe#storybook-preview-iframe');
    const badge = frame.locator('.cu-badge');

    await expect(badge).toHaveClass(/cu-badge--grey/); // Default color is grey
  });

  test('should apply the correct border radius class', async ({ page }) => {
    const frame = page.frameLocator('iframe#storybook-preview-iframe');
    const badge = frame.locator('.cu-badge');

    await expect(badge).toHaveClass(/rounded-full/); // Default is `full`
  });
  
});
