import {test, expect,Locator} from "@playwright/test";
import { Reusable } from "./Reusable.ts";

test("Verify user is able to login into application successfully", async ({page})=>{
    const login=new Reusable();
     await login.Url(page);
     await login.login(page,"standard_user","secret_sauce");
     await expect(page.getByText('Products')).toBeVisible();
})
test("Verify user is unable to login into application when user's account is locked", async ({page})=>{
    const login=new Reusable();
     await login.Url(page);
     await login.login(page,"locked_out_user","secret_sauce");
     const error:Locator=page.locator('[data-test="error"]')
     const error_message:string=await error.innerText();
    expect(error_message).toContain("this user has been locked out");

})
test("Verify user is login is not enabled when username and password not entered", async ({page})=>{
    const login=new Reusable();
     await login.Url(page);
     await expect(page.getByRole('button',{name:'Login'})).toBeDisabled();
     //await login.login(page,"locked_out_user","secret_sauce");
    //  const error:Locator=page.locator('[data-test="error"]')
    //  const error_message:string=await error.innerText();
    // expect(error_message).toContain("this user has been locked out");
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
