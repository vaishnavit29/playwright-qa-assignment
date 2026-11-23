import {test,expect,Locator} from "@playwright/test";
import { Reusable } from "./Reusable.ts";

test("Verify user is able to sort pricde from lowest to higest",async({page})=>{
    const login=new Reusable();
     await login.Url(page);
     await login.login(page,"standard_user","secret_sauce");
     await expect(page.getByText('Products')).toBeVisible();
    //  const items_beforesort=await page.locator('.inventory_item_price').all();
    //  for(const item of items_beforesort){
    //     console.log(await item.textContent());
    //  }
     const sortOpt:Locator=page.locator('.product_sort_container')
     await sortOpt.click();
     await sortOpt.selectOption('Price (high to low)');
     const items=await page.locator('.inventory_item_price').all();
     for(const item of items){
        console.log(await item.textContent());
     }
    const first_val=await page.locator('.inventory_item_price').nth(0).innerText();
     const first_val_removal=( first_val).replace("$",""); 
     const second_val=await page.locator('.inventory_item_price').nth(1).innerText();
     const second_val_removal=(second_val).replace("$",""); 
     expect(Number(first_val_removal)).toBeGreaterThanOrEqual(Number(second_val_removal));
     if(Number(first_val_removal)>=Number(second_val_removal)){
        console.log("First values is "+Number(first_val_removal));
        console.log("Second values is "+Number(second_val_removal));
        console.log("first is higher");
     }

    }
)