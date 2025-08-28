import {expect} from '@playwright/test'
class Signuppage
{
    Signuppage(page,sheet,expect)
    {
        this.expect = expect;
        this.header_check = page.locator("div>h2>b");
        this.Header_info = sheet.getCell(8,2).value;
        this.mr_salutaion = page.locator("section>div>div>div>div>h2+form>div>div>label[for*='1']>div>span>input");
        this.signup_pwd = page.locator("input[data-qa*='pass']");
        this.dob_date = page.locator("select#days");
        this.dob_month = page.locator("select#months");
        this.dob_year = page.locator("select#years");
        this.newsLetter_checkbox = page.locator("input#newsletter");
        this.specialOffer_checkbox = page.locator("input#optin");

        this.pwd = sheet.getCell(9,2).value;
        this.firstName = page.locator("input[data-qa*='first']");
        this.lastName = page.locator("input[data-qa*='last']");
        this.companyname = page.locator("p.form-group>label[for*='company']");
        this.address1 = page.locator("p.form-group>label[for*='1']+input");
        this.address2 = page.locator("p.form-group>label[for*='2']+input");
        this.state = page.locator("p.form-group>input#state");
        this.city = page.locator("p.form-group>input#city");
        this.zipCode = page.locator("p.form-group>input#zipcode");
        this.mobilenumber = page.locator("p.form-group>input#mobile_number");
        this.createAccount_btn = page.locator("button[data-qa]");
        this.company_name = sheet.getCell(13,2).value;
        this.Add1 = sheet.getCell(14,2).value;
        this.Add2 = sheet.getCell(15,2).value;
        this.user_state = sheet.getCell(16,2).value;
        this.user_city = sheet.getCell(17,2).value;
        this.user_zipcode = sheet.getCell(18,2).value;
        this.mobile = sheet.getCell(19,2).value;
        this.fname = sheet.getCell(3,2).value;
        this.lname = sheet.getCell(4,2).value;

    }


    async checkHeader()
    {

        await expect(this.header_check).toContainText(this.Header_info);

    }

    async select_Salutation()
    {
        await this.mr_salutaion.click();

    }
    
    async enter_password()
    {
        await this.signup_pwd.fill(pwd);

    }
  

    async select_DOB()
    {
        await this.dob_date.selectOption("12");
        await this.dob_month.selectOption("May");
        await this.dob_year.selectOption("1999");

    }

    async select_CheckBoxes()
    {
        await this.newsLetter_checkbox.click();
        await this.specialOffer_checkbox.click();

    }
  
    async enter_Firstname()
    {
        await this.firstName.fill(this.fname);

    }

    async enter_Lastname()
    {
        await this.lastName.fill(this.lname);
    }
    
    async enter_company_details()
    {
        await this.companyname.fill(this.company_name);
        await this.address1.fill(this.Add1);
        await this.address2.fill(this.Add2);
        await this.state.fill(this.user_state);
        await this.city.fill(this.user_city);
        await this.zipCode.fill(this.user_zipcode);
        await this.mobilenumber.fill(this.mobile);
    }
  
    async click_Create_Account_btn()
    {
        await this.createAccount_btn.click();
    }
  
  
}

module.exports = {Signuppage};