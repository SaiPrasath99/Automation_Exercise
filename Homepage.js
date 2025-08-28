const {expect} = require('@playwright/test');

exports.Homepage =  class Homepage
{
    

    /**
     * 
     * @param {import('@playwright/test').Page} page
     * @param {import('@playwright/test').expect} expect
     */

    Homepage(page,sheet,expect)
    {
        this.page = page;
        this.expect = expect;
        this.signup_or_Login_icon = page.locator('//a[href="/login"]');
        this.pageTitle_excel = sheet.getCell(5,2).value;

        this.uname_after_login = page.locator("a>i+b");
        this.delete_acc_btn = page.locator("a[href*='delete']");
        this.uname_confirmation = sheet.getCell(21,2).value;
    }


    async homepage_visibility(page)
    {
        await expect(page).toHaveTitle(this.pageTitle_excel);
    }


    async click_signup_or_Login_icon()
    {
        await this.signup_or_Login_icon.click();
    }


    async verify_username()
    {
        await expect(this.uname_after_login).toContainText(this.uname_confirmation);
          
    }

    async click_Delete_btn()
    {
        await this.delete_acc_btn.click();
    }
    
}

