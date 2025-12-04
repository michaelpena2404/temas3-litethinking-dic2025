import { test, expect } from '@playwright/test';
import { LoginPage } from '../../e2e-pom/pages/loginPage';
import { testConfig } from '../../e2e-pom/config/testConfig';

test('test succes with POM', async ({ page }) => {
    let loginPage = new LoginPage(page, testConfig.baseUrl);
    await loginPage.navigateTo();
    await loginPage.login(testConfig.credentials.standdardUser);
    await loginPage.verifyloginSuccess();
});