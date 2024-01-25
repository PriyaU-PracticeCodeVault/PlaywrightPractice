import { test, chromium, expect } from "@playwright/test";
import { log } from "console";

test (`Login to Salesforce`, async () => {

    const browser = await chromium.launch({args:['--start-maximized'], channel:'msedge'});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Page Maximize
    await page.setViewportSize({
        width: 1600,
        height: 750,
      });

      //Login
    await page.goto("https://login.salesforce.com/")
    console.log("Url of the page is: " +page.url());

    await page.fill("#username", "priya_u@testleaf.com"); //Locator CSS selector - id
    await page.fill('[name=\'pw\']', "Salesforce@41"); //locator css selector - name
    await page.click('#Login'); //Locator CSS selector - id

    // Open Sales and create lead
    await page.click("button[class*='salesforceIdentityAppLauncherHeader']"); 
    await page.click("//button[text()='View All']");
    await page.click("one-app-launcher-app-tile[data-name=Sales]");
    await page.click("//a/span[text()='Leads']");
    await page.click("//div[text()='New']");

    //Enter details
    const fname = 'SivaBala';
    const lname ='Senthi';
    const title = 'Lead002';
    const phone = '7894564561';


    await page.click("button[name=salutation]");
    await page.click("//span[text()='Ms.']");
    await page.fill("(//label[text()='First Name']/following::input)[1]", fname);
    await page.fill("(//label[text()='Last Name']/following::input)[1]", lname);
    await page.fill("(//label[text()='Company']/following::input)[1]", "TestLeaf");
    await page.fill("(//label[text()='Title']/following::input)[1]", title);
    await page.fill("(//label[text()='Mobile']/following::input)[1]", phone);
    await page.click("//button[text()='Save']");
    page.waitForTimeout(5000);

    //Verify lead saved
    const leadname = await page.textContent("lightning-formatted-name[slot='primaryField']");
    console.log(leadname);
    
    expect(leadname).toContain(lname);
    
})