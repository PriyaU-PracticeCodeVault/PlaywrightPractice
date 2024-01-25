 
 /* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username
 * Enter the password
 * Click Login button
 * Verify the title of the page (using page.title() method)
 * 
 */

import { test, chromium } from "@playwright/test";

test (`Login to Salesforce`, async () => {

    const browser = await chromium.launch({headless:false, channel:'msedge'});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({
        width: 1600,
        height: 750,
      });
    await page.goto("https://login.salesforce.com/")
    await page.waitForTimeout(5000);
    console.log("Url of the page is: " +page.url());

    await page.locator("#username").fill("priya_u@testleaf.com"); //Locator CSS selector - id
    await page.locator('[name=\'pw\']').fill("Salesforce@41"); //locator css selector - name
    await page.locator('#Login').click(); //Locator CSS selector - id
    await page.waitForTimeout(5000);
    console.log("Title of the page: " +await page.title());

    
})