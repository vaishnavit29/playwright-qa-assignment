import {test , expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { ProductPage } from "../pages/ProductPage.ts";
import { CartPage } from "../pages/CartPage.ts";
import { CheckoutPage } from "../pages/CheckoutPage.ts";
import Data from "../testData/Data.json";

test("Verify user is displayed with correct total price",async({page})=>{
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
    const ItemPrice_$=await checkout.ItemPriceTxt.innerText();
    const Tax_$=await checkout.TaxTxt.innerText();
    const TotalPrice_$=await checkout.TotalPriceTxt.innerText();

    const ItemPrice=Number(ItemPrice_$.replace("Item total: $",""));
    const Tax=Number(Tax_$.replace("Tax: $",""));
    const TotalPrice=Number(TotalPrice_$.replace("Total: $",""));

    expect(TotalPrice).toBe(ItemPrice+Tax);
    if(TotalPrice==ItemPrice+Tax){
        console.log("Total Price is correct");
        console.log("Item Price is "+ItemPrice);
        console.log("Tax is "+Tax);
        console.log("Total Price is "+TotalPrice);
    }
    await checkout.FinishBtn.click();
    await expect(checkout.ThankYouTxt).toBeVisible();
    console.log(await checkout.ThankYouTxt.innerText());
}
)