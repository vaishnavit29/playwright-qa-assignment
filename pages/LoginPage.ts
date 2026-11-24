import { expect, Page} from "@playwright/test";

export class LoginPage{

     async Url(page:Page){
            await page.goto("https://www.saucedemo.com/");
            await expect(page.getByText('Swag Labs')).toBeVisible();
            

    }

    async login(page:Page, Username :string, Password:string){
        await page.getByLabel('Username').fill(Username);
            await page.getByLabel('Password').fill(Password);
            await page.getByRole('button',{name : 'Login'}).click();

    }
}