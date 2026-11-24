import { expect, Page, Locator} from "@playwright/test";

export class LoginPage{

    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginBtn:Locator;
    readonly SwagLabsTxt:Locator;
    readonly errorTxt:Locator;

    constructor(page:Page){
        this.page=page;
        this.username=page.getByLabel('Username');
        this.password=page.getByLabel('Password');
        this.loginBtn=page.getByRole('button',{name : 'Login'});
        this.SwagLabsTxt=page.getByText('Swag Labs');
        this.errorTxt=page.locator('[data-test="error"]');
    }

     async Url(){
            await this.page.goto("https://www.saucedemo.com/");

    }
    async login(Username :string, Password:string){
        await this.username.fill(Username);
        await this.password.fill(Password);
        await this.loginBtn.click();

    }
}