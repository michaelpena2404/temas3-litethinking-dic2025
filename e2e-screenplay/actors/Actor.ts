import { Page } from '@playwright/test';
import { Performable } from '../interactions/Performable';

export class Actor {
    private readonly name: string;
    private readonly page: Page;

    constructor(name: string, page: Page) {
        this.page = page;
        this.name = name;
    }

    static named(name: string, page: Page): Actor {
        return new Actor(name, page);
    }

    async attemptsTo(...tasks: Performable[]): Promise<void> {
        for (const task of tasks) {
            await task.performAs(this.page);
        }
    }

    getPage(): Page {
        return this.page;
    }
}