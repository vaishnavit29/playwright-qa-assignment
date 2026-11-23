import {test,expect} from "@playwright/test";

test("Verify Title",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
     page.title;
    await expect(page).toHaveTitle("Swag Labs");

})

test("Verify url",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveURL("https://www.saucedemo.com/");

})