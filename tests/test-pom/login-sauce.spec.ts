import { test, expect } from '@playwright/test';
import { LoginPage } from '../../e2e-pom/pages/loginPage';
import { testConfig } from '../../e2e-pom/config/testConfig';
import { InventoryPage } from '../../e2e-pom/pages/InventoryPage';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page, testConfig.baseUrl);
    await loginPage.navigateTo();
});

test('test Succes with POM', async ({ page }) => {
    await loginPage.login(testConfig.credentials.standdardUser);
    await loginPage.verifyloginSuccess();
});

test('test User locked out', async ({ page }) => {
    await loginPage.login(testConfig.credentials.lockedUser);
    await loginPage.verifyloginFailure(testConfig.errorMessages.lockedUserError);
});

test('test Login and logout', async ({ page }) => {
    let inventoryPage = new InventoryPage(page);
    await loginPage.login(testConfig.credentials.standdardUser);
    await inventoryPage.clickLogout();
    await loginPage.verifyLoginPage();
});
