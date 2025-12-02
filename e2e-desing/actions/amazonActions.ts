import { Page, Locator } from '@playwright/test';
import { SearchPageLocators } from '../locators/searchPageLocators';
import { TestData } from '../utils/testData';

export class AmazonActions {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async searchProduct(productName: string) {
        const searchPage = new SearchPageLocators(this.page);
        await searchPage.searchBox.click();
        await searchPage.searchBox.fill(productName);
        await searchPage.goButtonSearch.click();
    }

    async goToAmazonHomePage() {
        await this.page.goto(TestData.URL);
    }
}