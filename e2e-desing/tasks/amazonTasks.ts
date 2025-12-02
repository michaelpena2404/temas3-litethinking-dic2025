import { Page } from '@playwright/test';
import { SearchPageLocators } from '../locators/searchPageLocators';
import { ResumenProductLocators } from '../locators/resumenProductLocators';
import { DetailsProductsLocators } from '../locators/detailsProductsLocators';
import { AmazonActions } from '../actions/amazonActions';

export class AmazonTasks {
    private searchPageLocators: SearchPageLocators;
    private resumenProductLocators: ResumenProductLocators;
    private detailsProductsLocators: DetailsProductsLocators;
    private amazonActions: AmazonActions;

    constructor(page: Page , productName: string) {
        this.searchPageLocators = new SearchPageLocators(page);
        this.resumenProductLocators = new ResumenProductLocators(page, productName);
        this.detailsProductsLocators = new DetailsProductsLocators(page, productName);  
        this.amazonActions = new AmazonActions(page);
    }

     async searchProduct(productName: string) {
        await this.amazonActions.doClick(this.searchPageLocators.searchBox);
        await this.amazonActions.doEnterText(productName, this.searchPageLocators.searchBox);
        await this.amazonActions.doClick(this.searchPageLocators.goButtonSearch);
    }

    async clickOnProduct() {
        await this.amazonActions.doClick(this.resumenProductLocators.onProductLink);
    }

    async clickLinkStorePlayStation() {
        await this.amazonActions.doClick(this.detailsProductsLocators.visitStoreLinkPlayStation);
    }
}





   