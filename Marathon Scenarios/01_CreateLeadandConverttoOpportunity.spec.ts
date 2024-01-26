import { test, chromium, expect } from "@playwright/test";

test (`Create Lead and convert to opportunities in Salesforce`, async () => {

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
    await page.click("one-app-launcher-app-tile[data-name=Marketing]");
    await page.click("//a/span[text()='Leads']");
    await page.click("//div[text()='New']");

    //Enter details
    const fname = 'SivaBala';
    const lname ='Senthi';
    const oppname = "TestLeaf Automation";
    
    await page.click("button[name=salutation]");
    await page.click("//span[text()='Ms.']");
    await page.fill("(//label[text()='First Name']/following::input)[1]", fname);
    await page.fill("(//label[text()='Last Name']/following::input)[1]", lname);
    await page.fill("(//label[text()='Company']/following::input)[1]", "Company Name TBC");

    await page.click("//button[text()='Save']");

    //Verify lead saved
    const leadname = await page.textContent("lightning-formatted-name[slot='primaryField']");
    console.log(`${leadname} Created as Lead successfully`);
    
    
    //Convert to opportunity
    page.waitForTimeout(5000);
    await page.click("(//span[text()='Show more actions']/preceding-sibling::lightning-primitive-icon)[2]")
    await page.click("//span[text()='Convert']"); 
    await page.click("(//span[text()='Opportunity'])");
    await page.locator("(//span[text()='Opportunity Name']/following::input)[1]").clear();
    await page.fill("(//span[text()='Opportunity Name']/following::input)[1]", oppname);
    await page.click("//button[text()='Convert']");
    const opportunityStatus = await page.innerText("//div[@class='title']/h2");
    console.log("opportunityStatus: " +opportunityStatus);

    //verify the created lead is not available 
    await page.click("//button[text()='Go to Leads']");
    await page.fill('//input[@placeholder=\'Search this list...\']', lname);
    await page.click('(//span[text()=\'Name\'])');
    await page.screenshot();
    await page.waitForTimeout(5000); 
    const leadstatus = await page.innerText(".slds-rich-text-editor__output");
    console.log("Lead status after conversion: " +leadstatus);
    

    //Verify opportunity
    await page.click("(//span[text()='Opportunities'])");
    await page.fill('//input[@placeholder=\'Search this list...\']', oppname);
    await page.click('(//span[text()=\'Opportunity Name\'])');
    await page.click('(//a[@data-refid=\'recordId\'])[1]');

    //Verify Oppurtunity saved
    await page.waitForTimeout(5000); 
    const Oppstatus = await page.textContent("lightning-formatted-text[slot='primaryField']");
    console.log(`${Oppstatus} Created Oppurtunity successfully`);
    
})