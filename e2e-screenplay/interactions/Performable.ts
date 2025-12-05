import { Page } from '@playwright/test';

export interface Performable {
    performAs(page: Page): Promise<void>;
}