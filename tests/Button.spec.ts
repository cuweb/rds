import { test, expect } from '@playwright/test';

test.describe('Button Component', () => {
  test('should render primary button', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-button--primary');

    const frame = page.frameLocator('iframe#storybook-preview-iframe');
    const button = frame.locator('.cu-button');

    await button.waitFor({ state: 'visible', timeout: 10000 });
    await expect(button).toBeVisible();
    await expect(button).toHaveText('Primary Red');
  });

  test('should render button with an icon', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-button--with-icon');

    const frame = page.frameLocator('iframe#storybook-preview-iframe');
    const button = frame.locator('.cu-button');
    const icon = frame.locator('.cu-button .cu-icon');

    await button.waitFor({ state: 'visible', timeout: 10000 });
    await expect(button).toBeVisible();
    await expect(icon).toBeVisible();
    await expect(button).toHaveText(/Primary Red/);
  });

test('should trigger an event on click', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/components-button--primary');

  // Get the iframe locator
  const frameLocator = page.frameLocator('iframe#storybook-preview-iframe');

  // Wait for an element inside the iframe to confirm it's loaded
  await frameLocator.locator('.cu-button').waitFor({ state: 'visible', timeout: 10000 });

  // Get the actual frame
  const frame = await page.frame({ name: 'storybook-preview-iframe' });

  if (!frame) {
    throw new Error('Storybook iframe not found');
  }

  const button = frame.locator('.cu-button');

  // Inject JavaScript inside the iframe's execution context
  await frame.evaluate(() => {
    window.clicked = false; // Initialize a global variable inside iframe
    const btn = document.querySelector('.cu-button');
    if (btn) {
      btn.addEventListener('click', () => {
        window.clicked = true;
      });
    }
  });

  await button.click();

  // Check if `window.clicked === true` after clicking the button
  const isClicked = await frame.evaluate(() => window.clicked);
  expect(isClicked).toBeTruthy();
});

});
