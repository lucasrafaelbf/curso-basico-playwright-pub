import test from "@playwright/test";


test('Visitando pagina do Playwright', async ({ page }) => {
    await page.goto('https://playwright.dev');

})