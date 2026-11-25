import {test,expect,Locator} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { ProductPage } from "../pages/ProductPage.ts";
import Data from "../testData/Data.json";

test("Verify user is able to sort price from highest to lowest",async({page})=>{
    const login=new LoginPage(page);
     await login.Url();
     await login.login(Data.validUser.username,Data.validUser.password);
     const product=new ProductPage(page);
     await expect(product.ProductsTxt).toBeVisible();
     await product.SortOpt.click();
     await product.SortOpt.selectOption('Price (high to low)');
     const itemsPrice=await product.Items.all();
     for(const item of itemsPrice){
        console.log(await item.textContent());
     }
     const first_val=await product.Items.nth(0).innerText();
     const first=( first_val).replace("$",""); 
     const second_val=await product.Items.nth(1).innerText();
     const second=(second_val).replace("$","");
     const last_val=await product.Items.nth(itemsPrice.length - 1).innerText();
     const last=(last_val).replace("$","");
     expect(Number(first)).toBeGreaterThanOrEqual(Number(second))
     expect(Number(second)).toBeGreaterThanOrEqual(Number(last));
     if(Number(first)>=Number(second) && Number(second)>=Number(last)){
      console.log("First values is "+Number(first));
      console.log("Second values is "+Number(second));
      console.log("Last values is "+Number(last));
      console.log("Sort is from high to low");
     }
    }
)