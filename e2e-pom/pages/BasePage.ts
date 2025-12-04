import { Page } from '@playwright/test';

export abstract class BasePage{
    protected readonly page: Page;
    protected readonly baseUrl: string;

    constructor(page: Page, baseUrl: string) {
        this.page = page;
        this.baseUrl = baseUrl;
    }

    async navigateTo(path: string = ''): Promise<void> {
        await this.page.goto(`${this.baseUrl}${path}`);
    }
}