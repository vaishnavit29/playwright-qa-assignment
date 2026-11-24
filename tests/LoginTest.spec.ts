import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { ProductPage } from "../pages/ProductPage.ts";
import Data from "../testData/Data.json";

test("Verify user is able to login into application successfully", async ({page})=>{
    const login=new LoginPage(page);
     await login.Url();
     await login.login(Data.validUser.username,Data.validUser.password);
     const product=new ProductPage(page);
     await expect(product.ProductsTxt).toBeVisible();
})
test("Verify user is unable to login into application when user's account is locked", async ({page})=>{
    const login=new LoginPage(page);
     await login.Url();
     await login.login(Data.invalidUser.locked_out_user.username,
        Data.invalidUser.locked_out_user.password);
     const error_message:string=await login.errorTxt.innerText();
    expect(error_message).toContain("this user has been locked out");

})
test("Verify user is login is not enabled when username and password not entered", async ({page})=>{
    const login=new LoginPage(page);
     await login.Url();
     await expect(login.loginBtn).toBeDisabled();
})

// test("Verify user is unable to login into application when user's account has problem", async ({page})=>{
//     const login=new func();
//      await login.Url(page);
//      await login.login(page,"standard_user","secret_sauce");
//      await expect(page.getByText('Products')).toBeVisible();
// })
// test("Verify user is able to login into application when perfomance glich happen", async ({page})=>{
//     const login=new func();
//      await login.Url(page);
//      await login.login(page,"standard_user","secret_sauce");
//      await expect(page.getByText('Products')).toBeVisible();
// })
// test("Verify user is unable to login into application due to error", async ({page})=>{
//     const login=new func();
//      await login.Url(page);
//      await login.login(page,"standard_user","secret_sauce");
//      await expect(page.getByText('Products')).toBeVisible();
// })
// test("Verify user is unable to login into application due visual user", async ({page})=>{
//     const login=new func();
//      await login.Url(page);
//      await login.login(page,"standard_user","secret_sauce");
//      await expect(page.getByText('Products')).toBeVisible();
// })
