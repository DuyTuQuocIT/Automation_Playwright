import { expect, Page } from "@playwright/test";

export class HomePage {
    page: Page;

    private homeMenu: string = "#react-burger-menu-btn";

    constructor(page: Page) {
        this.page = page;
    }

    async isHomePageDisplayed() {
        await expect(this.page.locator(this.homeMenu)).toBeVisible();
    }
}