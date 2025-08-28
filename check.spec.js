import {expect, test} from '@playwright/test';

const {Homepage} = require('../PageObjects/Homepage')
const {Newuserpage} = require('../PageObjects/Newuserpage')
const {Signuppage} = require('../PageObjects/Signuppage')
const {Confirmationpage} = require('../PageObjects/Confirmationpage')


const Exceljs = require('exceljs');



test('ICAP_Portal', async({browser}) =>
{

    const browsercontext = await browser.newContext();
    const page = await browsercontext.newPage();
    

    await page.goto("https://talent.capgemini.com/in");

    await expect(page).toHaveTitle("India Intranet Homepage | Talent Capgemini");

    const NEXT_Link = page.locator("//h1[contains(text(),'Useful')]//following-sibling::ul//li//a[contains(@href,'degreed')]");

    
    const [nextPage] = await Promise.all
    ([

    browsercontext.waitForEvent('page'), 
    NEXT_Link.click(),
    

    ]);

    const username_next = nextPage.locator("//input[@id='username']");

    await username_next.fill("k-sai.prasath@capgemini.com");

    const continue_btn = nextPage.locator("//span[contains(text(),'Continue')]");

    await continue_btn.click();

    const continue_SSO_btn = nextPage.locator("//span[contains(text(),'Continue with SSO')]");

    await continue_SSO_btn.click();

    nextPage.locator("//*[@data-slot='icon']//ancestor::a[contains(@href,'home/overview')]").waitFor();

});








test.only('TC001-Register user', async({browser})=>
{

  const browserC = await browser.newContext();
  const page = await browserC.newPage();

  const wb = new Exceljs.Workbook();
  await wb.xlsx.readFile("C:/Users/kprasath/OneDrive - Capgemini/Documents/Data.xlsx");
  const sheet = wb.getWorksheet('Sheet1');
  
  const url = sheet.getCell(1,2).value;
  
  const hp = new Homepage(page,sheet,expect);
  const nup = new Newuserpage(page,sheet,expect);
  const sup = new Signuppage(page,sheet,expect);
  const cp = new Confirmationpage(page,sheet,expect);
  
  await page.goto(url);
  hp.homepage_visibility(page);
  await page.locator('//a[href="/login"]').click();

  
  await hp.click_signup_or_Login_icon();
  await nup.verifyTitle(page);
  await nup.enterCredentials();
  await nup.click_Signup();
  sup.checkHeader();
  sup.select_Salutation();
  sup.enter_password();
  sup.select_DOB();
  sup.select_CheckBoxes();
  sup.enter_Firstname();
  sup.enter_Lastname();
  sup.enter_company_details();
  sup.click_Create_Account_btn();
  cp.verify_success_message();
  cp.click_continue_btn();
  hp.verify_username();
  hp.click_Delete_btn();
  cp.verify_delete_message();
  cp.click_continue_btn_afterDelete();

  

});

