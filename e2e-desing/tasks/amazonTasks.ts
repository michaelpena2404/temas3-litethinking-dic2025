import { Page } from '@playwright/test';
import { SearchPageLocators } from '../locators/searchPageLocators';

export class AmazonTasks {
    private searchPageLocators: SearchPageLocators;

    constructor(page: Page) {
        this.searchPageLocators = new SearchPageLocators(page);
    }

     async searchProduct(productName: string) {
        await this.searchPageLocators.searchBox.click();
        await this.searchPageLocators.searchBox.fill(productName);
        await this.searchPageLocators.goButtonSearch.click();
    }
}





   