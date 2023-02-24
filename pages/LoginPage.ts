import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;

    private userName: string = "#user-name";
    private password: string = "#password";
    private btnLogin: string = "#login-button";

    constructor(page: Page) {
        this.page = page;
    }


    async login(user: string, pass: string) {
        // enter user name
        await this.page.locator(this.userName).fill(user);

        // enter password
        await this.page.locator(this.password).fill(pass);

        // click button login
        await this.page.locator(this.btnLogin).click();
    }    
}