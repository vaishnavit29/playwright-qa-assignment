import {test , expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { ProductPage } from "../pages/ProductPage.ts";
import { CartPage } from "../pages/CartPage.ts";
import Data from "../testData/Data.json";

test("Verify user is able to add a product in the cart",async({page})=>{
    const login=new LoginPage(page);
     await login.Url();
     await login.login(Data.validUser.username,Data.validUser.password);
     const product=new ProductPage(page);
     await expect(product.ProductsTxt).toBeVisible();
    await expect(product.AddtoCartBackpackBtn).toBeVisible();
    await product.AddtoCartBackpackBtn.click();
    await product.CartIcon.click();
    const cart=new CartPage(page);
    await expect(cart.RemoveBackpackBtn).toBeVisible();
})