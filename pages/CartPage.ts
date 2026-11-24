import {Page,Locator} from "@playwright/test";

export class CartPage{

    readonly page:Page;
    readonly CheckoutBtn:Locator;
    readonly RemoveBackpackBtn:Locator;
    readonly RemoveBoltTShirtBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.CheckoutBtn=page.getByRole('button',{name:'Checkout'});
        this.RemoveBackpackBtn=page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.RemoveBoltTShirtBtn=page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
    }

}