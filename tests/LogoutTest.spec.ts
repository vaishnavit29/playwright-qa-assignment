import {test,expect,Locator} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import Data from "../testData/Data.json";

test("Verify user is able to successfully logout from application",async({page})=>{
    const login=new LoginPage();
     await login.Url(page);
     await login.login(page,Data.validUser.username,Data.validUser.password);
     await expect(page.getByText('Products')).toBeVisible();
     const Menu:Locator=page.getByRole('button',{name:'Open Menu'})
     await Menu.click();
     const logOutOpt:Locator=page.locator('#logout_sidebar_link').getByText('Logout')
     logOutOpt.click();
     await expect(page.getByRole('button',{name : 'Login'})).toBeVisible();

})