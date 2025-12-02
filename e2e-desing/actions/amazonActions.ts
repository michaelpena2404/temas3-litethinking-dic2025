import { Page, Locator } from '@playwright/test';
import { SearchPageLocators } from '../locators/searchPageLocators';
import { TestData } from '../utils/testData';

export class AmazonActions {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async doEnterText(text: string, locator: Locator) {
        await locator.fill(text);
    }

    async doClick(locator: Locator) {
        await locator.click();
    }

    async goToAmazonHomePage() {
        await this.page.goto(TestData.URL);
    }
}