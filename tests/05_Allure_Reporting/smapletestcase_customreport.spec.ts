import { test, expect } from '@playwright/test';

test("Verify the VWO login title @P0 @smoke", async ({ page }) => {
    await test.step("Open the VWO app", async () => {
        await page.goto("https://app.vwo.com");
        await page.waitForLoadState('domcontentloaded');
    });

    await test.step("Capture the login page screenshot", async () => {
        const shot = await page.screenshot();
        await test.info().attach('step-0-screenshot', {
            body: shot,
            contentType: 'image/png',
        });
    });

    await test.step("Verify the login page title", async () => {
        await expect(page).toHaveTitle("Login - Wingify");
        await test.info().attach('step-1-logs', {
            body: 'Title verified: Login - Wingify',
            contentType: 'text/plain',
        });
    });
});
