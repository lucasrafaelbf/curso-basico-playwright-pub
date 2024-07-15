import test from "@playwright/test";


test('Visitando pagina do Playwright', async ({ page }) => {
    await page.goto('https://playwright.dev');
    //await page.locator('getStarted_Sjon').click();
    await page.getByText('Get started').click();


})