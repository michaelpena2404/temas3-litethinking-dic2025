import { Page } from '@playwright/test';

export class SearchPageLocators {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get searchBox() {
        return this.page.getByRole('searchbox', { name: 'Search Amazon' });
    }

    get goButtonSearch() {
        return this.page.getByRole('button', { name: 'Go', exact: true });
    }

}