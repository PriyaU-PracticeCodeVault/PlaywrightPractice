import { test, chromium, expect } from "@playwright/test";

test (`Edit Individuals in Salesforce`, async () => {

    const browser = await chromium.launch({args:['--start-maximized'], channel:'msedge'});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({
        width: 1600,
        height: 750,
      });
    await page.goto("https://login.salesforce.com/")
    console.log("Url of the page is: " +page.url());

    await page.fill("#username", "priya_u@testleaf.com"); //Locator CSS selector - id
    await page.fill('[name=\'pw\']', "Salesforce@41"); //locator css selector - name
    await page.click('#Login');

    const fname = 'Thiviya';

    // Open Individuals
    await page.click("button[class*='salesforceIdentityAppLauncherHeader']"); 
    await page.click("//button[text()='View All']");
    await page.click("//a[@data-label='Individuals']");

    await page.fill('//input[@placeholder=\'Search this list...\']', 'Levin');
    await page.click('//input[@placeholder=\'Search this list...\']');
    await page.click('(//a[@data-refid=\'recordId\'])[1]');
    await page.click('//div[text()=\'Edit\']');

    //Enter Salutation and first name 
    await page.locator('[data-aura-class=\'uiMenu\']').nth(4).click();
    await page.click("//a[@title='Mrs.']");
    await page.fill("(//span[text()='First Name']/following::input)[1]", fname);
    await page.click("(//span[text()='Save'])[2]");

    //Verify saved Individual
    const Individualname = await page.innerText("(//span[@class='uiOutputText'])[1]")
    console.log(Individualname);
    expect(Individualname).toContain('Levin');


    })