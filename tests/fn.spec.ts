import { test, expect, Page } from '@playwright/test';
import HomePage from "./pom/home";
import Pcp from "./pom/pcp";
import Pdp from "./pom/pdp";
import SliderCart from "./pom/slider_cart";
import MyBag from "./pom/my_bag";
test.describe.configure({ mode: 'serial' });//will not continue to next test if any tests fail
// test.beforeEach(async ({ page }) => {
//   await page.goto('https://fashionnova.com');
// });

test.describe('E-commerce product purchase', async() => {
  let page: Page;
  test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    let homePage = new HomePage(page);
    // await page.goto('https://fashionnova.com');
    await page.goto(homePage.url);
  })

  // test.beforeEach(async () => {
  //   await page.goto('https://fashionnova.com');
  // })

  test('Fashion Nova', async () => {
    //https://dzone.com/articles/execute-playwright-test-sequentially-same-browser-context

    // await page.goto('https://fashionnova.com');
    let homePage = new HomePage(page);
    await expect(page).toHaveTitle(homePage.homePageTitle);
    // await expect(page).toHaveTitle(/Fashion Nova/);
    await page.locator(homePage.popUpCloseButton).waitFor();
    // await page.locator('a.bx-close.bx-close-link.bx-close-inside').waitFor();

  });

  test('Close popup', async () => {
    let homePage = new HomePage(page);
    await page.click(homePage.popUpCloseButton);
    // await page.click(`a.bx-close.bx-close-link.bx-close-inside`);
    
  });

  test('Nav bar', async () => {
    let homePage = new HomePage(page);
    await page.locator(homePage.navNewIn).nth(0).hover();
    await page.locator(homePage.navSale).nth(0).hover();
    await page.locator(homePage.navMostWanted).nth(0).hover();
    // await page.locator(`text="Dresses"`).nth(0).click();
    
  });

  test('Dresses PCP', async () => {
    console.log(`PCP`);
    let pcp = new Pcp(page);
    await page.locator(pcp.navDresses).nth(0).click();
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0,2000);
    await page.mouse.wheel(0,2000);
    await page.mouse.wheel(0,2000);
    const productTile = await page.locator(pcp.productTile).nth(1);
    console.log(await productTile.innerText());
    await productTile.click();
    //how to click on a locator that is not visible on viewport, how to scroll
  });

  test('Dresses PDP', async () => {
    console.log(`PDP`);
    let pdp = new Pdp(page);
    console.log(await page.locator(pdp.productTitle).innerText());
    await page.locator(pdp.sizeButton,  { hasText: `S ` }).nth(0).click();
    await page.locator(pdp.sizeButton,  { hasText: `L ` }).nth(0).click();
    await page.locator(pdp.addToBagButton).nth(0).click();
    //await page.locator(`button[type="submit"].product-info__add-to-bag`,  { hasText: `Add to bag` }).click();
    await page.waitForTimeout(2000);
  });

  test('Slider cart', async () => {
    let sliderCart = new SliderCart(page);
    await page.locator(sliderCart.sliderCartButton).hover();
    console.log(`slider cart`);
    console.log(await page.locator(sliderCart.productTitle).innerText());
    console.log(await page.locator(sliderCart.productOptionSize).innerText());
    console.log(await page.locator(sliderCart.productPrice).innerText());
    await page.locator(sliderCart.sliderCartButton,  { hasText: `Checkout` }).click();
    await page.pause();
  });

  test('My Bag', async () => {
    console.log(`My Bag`);
    let myBag = new MyBag(page);
    console.log(await page.locator(myBag.productTitle).innerText());
    console.log(await page.locator(myBag.productOptionSize).innerText());
    console.log(await page.locator(myBag.productPrice).innerText());
    await page.locator(myBag.checkOutButton,  { hasText: `Checkout` }).click();
    await page.pause();
  });
});
