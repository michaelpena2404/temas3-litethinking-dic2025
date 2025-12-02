import { Page } from '@playwright/test';

export class ResumenProductLocators {

    private page: Page;
    private productName: string;

    constructor(page: Page, productName: string) {
        this.page = page;
        this.productName = productName;
    }

    get productSerarchResult() {
        return this.page.getByRole('link', { name: this.productName, exact: true });
    }
    
    get productLabel() {
        return this.page.getByLabel(this.productName);
    }

    get onProductLink() {
        return this.page.getByRole('link', { name: this.productName, exact: true });
    }

}