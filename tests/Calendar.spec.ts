import { test, expect } from '@playwright/test'

test.describe('Calendar Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-calendar--primary')

    // Ensure the Storybook iframe is fully loaded
    const frameLocator = page.frameLocator('iframe#storybook-preview-iframe')
    await frameLocator.locator('.cu-calendar').waitFor({ state: 'attached', timeout: 10000 })

    // Wait for any interactive date button (not disabled) to appear
    await frameLocator.locator('button:not([disabled])').first().waitFor({ state: 'visible', timeout: 10000 })
  })
})
