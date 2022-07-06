import { expect, Locator, Page } from '@playwright/test';

export abstract class PageObjectModel {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

}
