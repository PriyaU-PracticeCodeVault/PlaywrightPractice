import { chromium, test } from "@playwright/test";

test('Edit Lead in Leaftaps',async () => {


//setup
const browser = await chromium.launch({channel:'chrome'});
const browserContext = await browser.newContext();
const page = await browserContext.newPage();

//Test steps
await page.goto("http://leaftaps.com/opentaps/control/main");

//Login
await page.fill("#username", "Demosalesmanager");
await page.fill("[id='password']", "crmsfa");
await page.click(".decorativeSubmit");

//Click CRM/SFA
await page.click("text=CRM/SFA");
//Click Lead
await page. getByRole('link', { name: 'Leads', exact: true }).click();

//Click Create Lead
await page.click("text = Create Lead");

//Enter the details and create 
const fname = "Kanveni"; //change name in click leads
const lname = 'Ravichandran';

await page.fill("#createLeadForm_companyName", "Testleaf");
await page.locator("[name='firstName']").nth(2).fill(fname);
await page.fill("#createLeadForm_lastName", lname);
await page.click("[value='Create Lead']");

//Edit Lead
await page.click('//a[text()=\'Find Leads\']');
await page.fill('(//input[@name=\'firstName\'])[3]', fname);
await page.click('//button[text()=\'Find Leads\']');

//Click on the lead and edit
await page.click('//a[contains(text(), \'Kanveni\')][1]');
await page.click('//a[text()=\'Edit\']');
await page.locator('(//input[@name=\'companyName\'])[2]').clear();
await page.fill('(//input[@name=\'companyName\'])[2]', "Changedto_TeamTestleaf");
await page.click('[value=\'Update\']');


});