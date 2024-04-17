module.exports = { smokeTests };
 
async function smokeTests(page) {
    await page.goto('https://chan4lk.github.io/');
    await page.getByRole('link', { name: 'Open Source' }).click();
}