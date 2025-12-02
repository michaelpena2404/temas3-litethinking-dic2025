import { test, expect } from '@playwright/test';
import { TestData } from '../../e2e-desing/utils/testData';
import { AmazonActions } from '../../e2e-desing/actions/amazonActions';
import { AmazonTasks } from '../../e2e-desing/tasks/amazonTasks';
import { ResumenProductLocators } from '../../e2e-desing/locators/resumenProductLocators';
import { DetailsProductsLocators } from '../../e2e-desing/locators/detailsProductsLocators';

let amazonTasks: AmazonTasks;
let resumenProductLocators: ResumenProductLocators;
let amazonActions: AmazonActions;
let detailsProductsLocators: DetailsProductsLocators;
let productName = TestData.PRODUCT_NAME;

test.beforeAll(async ({ page }) => {
  amazonTasks = new AmazonTasks(page, productName);
  amazonActions = new AmazonActions(page);
  resumenProductLocators = new ResumenProductLocators(page, productName);
  detailsProductsLocators = new DetailsProductsLocators(page, productName);
});

test('test search Product PlayStation 5 Pro Console', async ({ page }) => {  
  await amazonActions.goToAmazonHomePage();
  await amazonTasks.searchProduct(TestData.SEARCH_TERM);

  //Resumen Product
  await expect(resumenProductLocators.productSerarchResult).toBeVisible();
  await expect(resumenProductLocators.productLabel).toContainText(productName);
  await amazonTasks.clickOnProduct();

  //details product
  await expect(detailsProductsLocators.headingLabel).toBeVisible();
  await expect(detailsProductsLocators.title).toContainText(productName);
  await amazonTasks.clickLinkStorePlayStation();
  
  //link to store Playstation
  await expect(page.getByTestId('hero-image').getByTestId('image')).toBeVisible();
});