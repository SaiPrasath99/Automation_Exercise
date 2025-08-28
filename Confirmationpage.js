import {expect,page} from '@playwright/test'
class Confirmationpage
{


    Confirmationpage(page,sheet,expect)
    {
        this.page = page;
        this.expect = expect;
        this.account_created = page.locator("h2>b");
        this.continue_btn_aftercreation = page.locator("a[data-qa]");
        this.success_acc_creation_msg = sheet.getCell(20,2).value;

        this.delete_verification = page.locator("h2>b");
        this.continue_btn_afterdelete = page.locator("a[data-qa*='continue']");
        this.delete_msg = sheet.getCell(22,2).value;

    }



    async verify_success_message()
    {
        await expect(this.account_created).toContainText(this.success_acc_creation_msg);

    }
    
      async click_continue_btn()
      {
        await this.continue_btn_aftercreation.click();

      }
      
      async verify_delete_message()
      {
        await expect(this.delete_verification).toContainText(this.delete_msg);

      }

      async click_continue_btn_afterDelete()
      {
        await this.continue_btn_afterdelete.click();

      }
      
}

module.exports = {Confirmationpage};