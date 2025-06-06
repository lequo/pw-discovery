import { test, expect } from '@playwright/test';

test('Solution 17/10/24', async ({ page }) => {
    await page.clock.setFixedTime(new Date('2024-10-17T01:00:00'));
    await page.goto('https://material.playwrightvn.com/017-detect-user-agent.html');
    await expect(page.locator('span#localTime')).toContainText('1:00:00 AM');
})