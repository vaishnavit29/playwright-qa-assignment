import {test , expect, Locator} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import Data from "../testData/Data.json";

test("Verify user is able to order a single product successfully",async({page})=>{
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
    const CheckoutOpt:Locator=page.getByRole('button',{name:'Checkout'})
    await CheckoutOpt.click();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();
    await page.getByPlaceholder('First Name').fill("Vaishnavi");
    await page.getByPlaceholder('Last Name').fill("Tandle");
    await page.getByPlaceholder('Zip/Postal Code').fill("75034");
    await page.getByRole('button',{name:'Continue'}).click();
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await page.getByRole('button',{name:'Finish'}).click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    console.log(await page.getByText('Thank you for your order!').innerText());
})

test("Verify user is able to order multiple products successfully",async({page})=>{
    const login=new LoginPage();
     await login.Url(page);
     await login.login(page,Data.validUser.username,Data.validUser.password);
     await expect(page.getByText('Products')).toBeVisible();
    const AddtoCart1:Locator= page.locator('.inventory_item_description')
  .filter({ hasText: 'Sauce Labs Backpack' })
  .getByRole('button', { name: 'Add to cart' })
    await expect(AddtoCart1).toBeVisible();
    await AddtoCart1.click();
    const AddtoCart2:Locator= page.locator('.inventory_item_description').nth(2)
    .getByRole('button', { name: 'Add to cart' })
    await expect(AddtoCart2).toBeVisible();
    await AddtoCart2.click();
    await page.locator('.shopping_cart_link').click();
    const RemoveOpt1:Locator=page.locator('[data-test="remove-sauce-labs-backpack"]')
    await expect(RemoveOpt1).toBeVisible();
    const RemoveOpt2:Locator=page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
    await expect(RemoveOpt2).toBeVisible();
    const CheckoutOpt:Locator=page.getByRole('button',{name:'Checkout'})
    await CheckoutOpt.click();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();

    await page.getByPlaceholder('First Name').fill("Vaishnavi");
    await page.getByPlaceholder('Last Name').fill("Tandle");
    await page.getByPlaceholder('Zip/Postal Code').fill("75034");
    await page.getByRole('button',{name:'Continue'}).click();
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await page.getByRole('button',{name:'Finish'}).click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    console.log(await page.getByText('Thank you for your order!').innerText());
})



test("Verify user is unable to proceed with checkout when cart is empty",async({page})=>{
    const login=new LoginPage();
     await login.Url(page);
     await login.login(page,Data.validUser.username,Data.validUser.password);
     await expect(page.getByText('Products')).toBeVisible();
    await page.locator('.shopping_cart_link').click();
    await expect(page.getByRole('button',{name:'Checkout'})).toBeHidden();
})

test("Verify user is unable to continue with checkout when user information is not provided",async({page})=>{
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
    const CheckoutOpt:Locator=page.getByRole('button',{name:'Checkout'})
    await CheckoutOpt.click();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();
    await expect(page.getByRole('button',{name:'Continue'})).toBeDisabled();
    
})

