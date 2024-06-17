module.exports = { homePageTests };
 
async function homePageTests(page) {
    await page.goto('https://uat.gyprock.com.au/');
}