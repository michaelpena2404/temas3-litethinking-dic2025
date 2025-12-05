import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class FinishPage extends BasePage {
  private readonly finishButton: Locator;
  private readonly completeHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
  }

  async finishOrder(): Promise<void> {
    await this.finishButton.click();
  }

  async verifyOrderCompleted(): Promise<void> {
    await expect(this.completeHeader).toBeVisible();
    await expect(this.completeHeader).toContainText('Thank you for your order!');
  }
}
