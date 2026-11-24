import {test,expect,Locator} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { ProductPage } from "../pages/ProductPage.ts";
import Data from "../testData/Data.json";

test("Verify user is able to successfully logout from application",async({page})=>{
    const login=new LoginPage(page);
     await login.Url();
     await login.login(Data.validUser.username,Data.validUser.password);
     const product=new ProductPage(page);
     await expect(product.ProductsTxt).toBeVisible();
     await product.MenuBtn.click();
     await product.LogoutBtn.click();
    const login1=new LoginPage(page);
    await expect(login1.SwagLabsTxt).toBeVisible();
    await expect(login1.loginBtn).toBeVisible();

})