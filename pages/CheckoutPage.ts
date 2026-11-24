import {Page,Locator} from "@playwright/test";

export class CheckoutPage{

    readonly page:Page;
    readonly FirstName:Locator;
    readonly LastName:Locator;
    readonly PostalCode:Locator;
    readonly YourInforTxt:Locator;
    readonly OverviewTxt:Locator;
    readonly ContinueBtn:Locator;
    readonly FinishBtn:Locator;
    readonly ThankYouTxt:Locator;

    constructor(page:Page){
        this.page=page;
        this.FirstName=page.getByPlaceholder('First Name');
        this.LastName=page.getByPlaceholder('Last Name');
        this.PostalCode=page.getByPlaceholder('Zip/Postal Code');
        this.YourInforTxt=page.getByText('Checkout: Your Information');
        this.FinishBtn=page.getByRole('button', { name: 'Finish' });
        this.ContinueBtn=page.getByRole('button', { name: 'Continue' });
        this.OverviewTxt=page.getByText('Checkout: Overview');
        this.ThankYouTxt=page.getByText('Thank you for your order!');

    }


}