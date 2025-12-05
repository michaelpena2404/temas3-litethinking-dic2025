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
    private readonly errorMessage = '[data-test="error"]';

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

    async verifyloginFailure(errorMessage: string): Promise<void> {
        await expect(this.page.locator(this.errorMessage)).toBeVisible();
        await expect(this.page.locator(this.errorMessage)).toContainText(errorMessage);
    }

    async verifyLoginPage(): Promise<void> {
        await expect(this.page.locator(this.loginButton)).toBeVisible();
        await expect(this.page.locator(this.usernameInput)).toBeVisible();
        await expect(this.page.locator(this.passwordInput)).toBeVisible();
    }
}

