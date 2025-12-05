import { test, Page } from '@playwright/test';
import { LoginPage } from '../../e2e-pom/pages/loginPage';
import { InventoryPage } from '../../e2e-pom/pages/InventoryPage';
import { CartPage } from '../../e2e-pom/pages/CartPage';
import { CheckoutPage } from '../../e2e-pom/pages/CheckoutPage';
import { FinishPage } from '../../e2e-pom/pages/FinishPage';

const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Order Flow', () => {
  test('should complete an order successfully', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page, BASE_URL);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const finishPage = new FinishPage(page);

    await loginPage.navigateTo();
    await loginPage.login({ username: 'standard_user', password: 'secret_sauce' });
    // Aquí deberías agregar la lógica para seleccionar el producto, agregar al carrito y navegar según los métodos definidos en InventoryPage
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.fillInformation('Pedro', 'Peña', '1000');
    await checkoutPage.continue();
    await finishPage.finishOrder();
    await finishPage.verifyOrderCompleted();
  });
});
