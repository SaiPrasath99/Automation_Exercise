import {expect} from '@playwright/test'
class Newuserpage
{

    Newuserpage(page,sheet,expect)
    {   
        this.expect = expect;
        this.new_user_signup = page.locator("section>div>div>div+div+div>div>h2");
        this.newUserSignup = sheet.getCell(6,2).value;
        this.signup_name = page.locator("form[action='/signup']>input[data-qa*='name']");
        this.signup_email = page.locator("form[action*='signup']>input[data-qa*='mail']");
        this.signup_btn = page.locator("button[data-qa*='sign']");
        this.Name = sheet.getCell(7,2).value;
        this.E_mail = sheet.getCell(2,2).value;
    }


    async verifyTitle(page)
    {
        await page.expect(this.new_user_signup).toContainText(this.newUserSignup);
    }


    async enterCredentials()
    {
        await this.signup_name.fill(this.Name);
        await this.signup_email.fill(this.E_mail);
    }

    async click_Signup()
    {
        await this.signup_btn.click();
    }

}

module.exports = {Newuserpage};