import { Page } from '@playwright/test';

export class DetailsProductsLocators {

    private page: Page;
    private productName: string;

    constructor(page: Page, productName: string) {
        this.page = page;
        this.productName = productName;
    }

    get headingLabel() {
        return this.page.getByRole('heading', { name: this.productName }).locator('#productTitle');
    }

    get title() {
        return this.page.locator('#title');
    }

    get visitStoreLinkPlayStation() {
        return this.page.getByRole('link', { name: 'Visit the PlayStation Store' });
    }
}