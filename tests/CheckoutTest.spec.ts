import {test , expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { ProductPage } from "../pages/ProductPage.ts";
import { CartPage } from "../pages/CartPage.ts";
import { CheckoutPage } from "../pages/CheckoutPage.ts";
import Data from "../testData/Data.json";

test("Verify user is able to order a single product successfully",async({page})=>{
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
    await cart.CheckoutBtn.click();
  const checkout=new CheckoutPage(page);
    await expect(checkout.YourInforTxt).toBeVisible();
    await checkout.FirstName.fill(Data.user_information.firstName);
    await checkout.LastName.fill(Data.user_information.lastName);
    await checkout.PostalCode.fill(Data.user_information.postalCode);
    await checkout.ContinueBtn.click();
    await expect(checkout.OverviewTxt).toBeVisible();
    await checkout.FinishBtn.click();
    await expect(checkout.ThankYouTxt).toBeVisible();
    console.log(await checkout.ThankYouTxt.innerText());
})

test("Verify user is able to order multiple products successfully",async({page})=>{
    const login=new LoginPage(page);
     await login.Url();
     await login.login(Data.validUser.username,Data.validUser.password);
     const product=new ProductPage(page);
     await expect(product.ProductsTxt).toBeVisible();
    await expect(product.AddtoCartBackpackBtn).toBeVisible();
    await product.AddtoCartBackpackBtn.click();
    await expect(product.AddtoCartBoltTShirtBtn).toBeVisible();
    await product.AddtoCartBoltTShirtBtn.click();
    await product.CartIcon.click();
    const cart=new CartPage(page);
    await expect(cart.RemoveBackpackBtn).toBeVisible();
    await expect(cart.RemoveBoltTShirtBtn).toBeVisible(); 
    await cart.CheckoutBtn.click();
    const checkout=new CheckoutPage(page);
    await expect(checkout.YourInforTxt).toBeVisible();
    await checkout.FirstName.fill(Data.user_information.firstName);
    await checkout.LastName.fill(Data.user_information.lastName);
    await checkout.PostalCode.fill(Data.user_information.postalCode);
    await checkout.ContinueBtn.click();
    await expect(checkout.OverviewTxt).toBeVisible();
    await checkout.FinishBtn.click();
    await expect(checkout.ThankYouTxt).toBeVisible();
    console.log(await checkout.ThankYouTxt.innerText());
})


test("Verify user is unable to proceed with checkout when cart is empty",async({page})=>{
    const login=new LoginPage(page);
     await login.Url();
     await login.login(Data.validUser.username,Data.validUser.password);
     const product=new ProductPage(page);
     await expect(product.ProductsTxt).toBeVisible();
    await product.CartIcon.click();
    const cart=new CartPage(page);
    await expect(cart.CheckoutBtn).toBeHidden();
})

test("Verify user is unable to continue with checkout when user information is not provided",async({page})=>{
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
    await cart.CheckoutBtn.click();
  const checkout=new CheckoutPage(page);
    await expect(checkout.YourInforTxt).toBeVisible();
    await expect(checkout.ContinueBtn).toBeDisabled();
    
})

