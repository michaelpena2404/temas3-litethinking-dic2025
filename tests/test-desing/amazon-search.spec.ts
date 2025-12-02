import { test, expect } from '@playwright/test';
import { TestData } from '../../e2e-desing/utils/testData';
import { AmazonActions } from '../../e2e-desing/actions/amazonActions';
import { AmazonTasks } from '../../e2e-desing/tasks/amazonTasks';
import { ResumenProductLocators } from '../../e2e-desing/locators/resumenProductLocators';

let amazonTasks: AmazonTasks;
let resumenProductLocators: ResumenProductLocators;
let amazonActions: AmazonActions;

test.beforeAll(async ({ page }) => {
  amazonTasks = new AmazonTasks(page);
  amazonActions = new AmazonActions(page);
  resumenProductLocators = new ResumenProductLocators(page, 'PlayStation 5 Pro Console');
});

test('test search Product PlayStation 5 Pro Console', async ({ page }) => {  
  await amazonActions.goToAmazonHomePage();
  await amazonTasks.searchProduct(TestData.SEARCH_TERM);

  //Resumen Product
  await expect(resumenProductLocators.productSerarchResult).toBeVisible();
  await expect(resumenProductLocators.productLabel).toContainText('PlayStation 5 Pro Console');
  await resumenProductLocators.clickOnProduct();

  //details product
  await expect(page.getByRole('heading', { name: 'PlayStation 5 Pro Console' }).locator('#productTitle')).toBeVisible();
  await expect(page.locator('#title')).toContainText('PlayStation 5 Pro Console');
  await page.getByRole('link', { name: 'Visit the PlayStation Store' }).click();
  
  //link to store Playstation
  await expect(page.getByTestId('hero-image').getByTestId('image')).toBeVisible();
});