import {test , expect, Locator} from "@playwright/test";
import { Reusable } from "../utils/Reusable.ts";
import Data from "../testData/Data.json";

test("Verify user is displayed with correct total price",async({page})=>{
    const login=new Reusable();
     await login.Url(page);
     await login.login(page,Data.validUser.username,Data.validUser.password);
     await expect(page.getByText('Products')).toBeVisible();
    const AddtoCart:Locator= page.locator('.inventory_item_description')
  .filter({ hasText: 'Sauce Labs Backpack' })
  .getByRole('button', { name: 'Add to cart' })
    //AddtoCart:Locator=page.Locator('.inventory_item_description').filter({hasText:'Sauce Labs Backpack'}).
    // getByRole('button', { name: 'Add to cart' });
    await expect(AddtoCart).toBeVisible();
    await AddtoCart.click();
    await page.locator('.shopping_cart_link').click();
    const RemoveOpt:Locator=page.getByRole('button',{name:'Remove'})
    expect(RemoveOpt).toBeVisible();
    const CheckoutOpt:Locator=page.getByRole('button',{name:'Checkout'})
    await CheckoutOpt.click();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();
    await page.getByPlaceholder('First Name').fill("Vaishnavi");
    await page.getByPlaceholder('Last Name').fill("Tandle");
    await page.getByPlaceholder('Zip/Postal Code').fill("75034");
    await page.getByRole('button',{name:'Continue'}).click();
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    const ItemPriceLoc:Locator=page.locator('.summary_subtotal_label')
    const TaxLoc:Locator=page.locator('.summary_tax_label')
    const TotalPriceLoc:Locator=page.locator('.summary_total_label')

    const ItemPrice_$=await ItemPriceLoc.innerText();
    const Tax_$=await TaxLoc.innerText();
    const TotalPrice_$=await TotalPriceLoc.innerText();

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
    await page.getByRole('button',{name:'Finish'}).click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    console.log(await page.getByText('Thank you for your order!').innerText());
}
)