import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
  const basePage = new BasePage(page);
  // launch demo page
  await basePage.goTo("https://www.saucedemo.com/");
});

test.describe('Login Test', () => {
  test('Login Successfully @pass', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.login('standard_user', 'secret_sauce');

    // home page arrived
    await homePage.isHomePageDisplayed();
  });


  test('Login With Performance Issue @performance', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('performance_glitch_user', 'secret_sauce');

    // home page arrived
    const homePage = new HomePage(page);
  });


  test('Login Failed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('locked_out_user', 'secret_sauce');

    // home page arrived
    const homePage = new HomePage(page);
  });

});
