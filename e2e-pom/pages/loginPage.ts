import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

interface LoginCredentials {
    username: string;
    password: string;
}

export class LoginPage extends BasePage {

    private readonly usernameInput = '[data-test="username"]';
    private readonly passwordInput = '[data-test="password"]';
    private readonly loginButton = '[data-test="login-button"]';
    private readonly headerTitle = '[data-test="title"]';
    private readonly primaryHeader = '[data-test="primary-header"]';

    constructor(page: Page, baseUrl: string) {
        super(page, baseUrl);
    }

    async login(credetials: LoginCredentials): Promise<void> {
        await this.page.fill(this.usernameInput, credetials.username);
        await this.page.fill(this.passwordInput, credetials.password);
        await this.page.click(this.loginButton);
    }

    async verifyloginSuccess(): Promise<void> {
        await expect(this.page.locator(this.headerTitle)).toContainText('Products');
        await expect(this.page.locator(this.primaryHeader)).toContainText('Swag Labs');
    }
}