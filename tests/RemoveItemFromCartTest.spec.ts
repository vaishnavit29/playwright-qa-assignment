import {test , expect, Locator} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import Data from "../testData/Data.json";

test("Verify user is able to remove a product in the cart",async({page})=>{
    const login=new LoginPage();
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
    await RemoveOpt.click();
    expect(RemoveOpt).toBeHidden();

})

