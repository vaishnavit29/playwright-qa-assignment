import {test , expect, Locator} from "@playwright/test";
import { Reusable } from "./Reusable.ts";

test("Verify user is able to add a product in the cart",async({page})=>{
    const login=new Reusable();
     await login.Url(page);
     await login.login(page,"standard_user","secret_sauce");
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
})