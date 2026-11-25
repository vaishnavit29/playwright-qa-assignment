import {Page,Locator,expect} from "@playwright/test";

export class ProductPage{

    readonly page:Page;
    readonly ProductsTxt:Locator;
    readonly AddtoCartBackpackBtn:Locator;
    readonly AddtoCartBoltTShirtBtn:Locator;
    readonly CartIcon:Locator;
    readonly MenuBtn:Locator;
    readonly LogoutBtn:Locator;
    readonly Items:Locator;
    readonly SortOpt:Locator;

 constructor(page:Page){
    this.page=page;
    this.ProductsTxt=page.getByText('Products');
    this.AddtoCartBackpackBtn=page.locator('.inventory_item_description')
  .filter({ hasText: 'Sauce Labs Backpack' })
  .getByRole('button', { name: 'Add to cart' });
  this.AddtoCartBoltTShirtBtn=page.locator('.inventory_item_description')
  .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
  .getByRole('button', { name: 'Add to cart' });
  this.CartIcon=page.locator('.shopping_cart_link');
  this.MenuBtn=page.getByRole('button',{name:'Open Menu'});
  this.LogoutBtn=page.locator('#logout_sidebar_link').getByText('Logout');
   this.Items= page.locator('.inventory_item_price');
   this.SortOpt=page.locator('.product_sort_container');



}

}