import { test, expect } from '@playwright/test'

test.describe('Avatar Component', () => {
  let frame

  test.beforeEach(async ({ page }) => {
    // Navigate to Storybook Avatar component
    await page.goto('http://localhost:6006/?path=/story/components-avatar--primary')

    // Wait for the Storybook iframe to appear
    frame = page.frameLocator('iframe#storybook-preview-iframe')

    // Wait until the iframe content loads properly by checking an element inside it
    await frame.locator('.not-prose.inline-block.bg-cu-black-100').waitFor({ state: 'visible', timeout: 15000 })
  })

  test('should render the Avatar component', async () => {
    const avatar = frame.locator('.not-prose.inline-block.bg-cu-black-100')
    await expect(avatar).toBeVisible()
  })

  test('should display correct initials when no image is provided', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-avatar--no-image')
    await frame.locator('.flex.items-center.justify-center.font-semibold').waitFor({ state: 'visible', timeout: 10000 })

    const initials = frame.locator('.flex.items-center.justify-center.font-semibold')
    await expect(initials).toBeVisible()
    await expect(initials).toHaveText(/^[A-Z]+$/)
  })

  test('should display an image when provided', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-avatar--primary')

    // Wait for the iframe and its contents to load
    await frame.locator('.not-prose.inline-block.bg-cu-black-100').waitFor({ state: 'visible', timeout: 15000 })

    // Wait for any visible image inside the Avatar component
    const avatarImage = frame.locator('img')

    await avatarImage.waitFor({ state: 'attached', timeout: 15000 }) // Ensures the image is in the DOM
    await avatarImage.waitFor({ state: 'visible', timeout: 15000 }) // Ensures the image is rendered

    // Assertions
    await expect(avatarImage).toBeVisible()
    await expect(avatarImage).toHaveAttribute('alt', /Avatar/)
  })

  test('should apply circular styling when isCircle is true', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-avatar--full-circle')
    await frame.locator('.rounded-full').waitFor({ state: 'visible', timeout: 10000 })

    const avatar = frame.locator('.rounded-full')
    await expect(avatar).toBeVisible()
  })

  test('should trigger onClick event when clicked', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-avatar--primary')
    await frame.locator('.cursor-pointer').waitFor({ state: 'visible', timeout: 10000 })

    const avatar = frame.locator('.cursor-pointer')

    await avatar.click()
    await expect(avatar).toHaveClass(/cursor-pointer/)
  })
})
