import {test,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";

test("Verify Title",async ({page})=>{
    const login=new LoginPage(page);
    await login.Url();
    await expect(login.SwagLabsTxt).toBeVisible();
     page.title;
    await expect(page).toHaveTitle("Swag Labs");

})

test("Verify url",async ({page})=>{
    const login=new LoginPage(page);
    await login.Url();
    await expect(login.SwagLabsTxt).toBeVisible();
    await expect(page).toHaveURL("https://www.saucedemo.com/");

})