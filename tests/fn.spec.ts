import { test, expect, Page } from '@playwright/test';
test.describe.configure({ mode: 'serial' });//will not continue to next test if any tests fail
// test.beforeEach(async ({ page }) => {
//   await page.goto('https://fashionnova.com');
// });

test.describe('E-commerce product purchase', async() => {
  let page: Page;
  test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto('https://fashionnova.com');
  })

  // test.beforeEach(async () => {
  //   await page.goto('https://fashionnova.com');
  // })

  test('Fashion Nova', async () => {
    //https://dzone.com/articles/execute-playwright-test-sequentially-same-browser-context

    // await page.goto('https://fashionnova.com');
    await expect(page).toHaveTitle(/Fashion Nova/);
    await page.locator('a.bx-close.bx-close-link.bx-close-inside').waitFor();
    // await page.click(`a.bx-close.bx-close-link.bx-close-inside`);
    // await page.locator(`text="New In"`).nth(0).hover();
    // await page.locator(`text="Sale"`).nth(0).hover();
    // await page.locator(`text="Most Wanted"`).nth(0).hover();
    // await page.locator(`text="Dresses"`).nth(0).click();

  });

  test('Close popup', async () => {
    await page.click(`a.bx-close.bx-close-link.bx-close-inside`);
    // await expect(page).toHaveTitle(/Fashion Nova/);
    
  });

  test('Nav bar', async () => {
    await page.locator(`text="New In"`).nth(0).hover();
    await page.locator(`text="Sale"`).nth(0).hover();
    await page.locator(`text="Most Wanted"`).nth(0).hover();
    // await page.locator(`text="Dresses"`).nth(0).click();
    
  });

  test('Dresses PCP', async () => {
    console.log(`PCP`);
    await page.locator(`text="Dresses"`).nth(0).click();
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0,2000);
    await page.mouse.wheel(0,2000);
    await page.mouse.wheel(0,2000);
    const productLoc = await page.locator(`div.product-tile__product-title > a`).nth(1);
    console.log(await productLoc.innerText());
    await productLoc.click();
    //how to click on a locator that is not visible on viewport, how to scroll
  });

  test('Dresses PDP', async () => {
    console.log(`PDP`);
    console.log(await page.locator(`h1.product-info__title`).innerText());
    await page.locator(`span.product-info__size-button-label`,  { hasText: `S ` }).click();
    await page.locator(`span.product-info__size-button-label`,  { hasText: `L ` }).click();
    await page.locator(`text="Add to bag"`).nth(0).click();
    await page.locator(`button[type="submit"].product-info__add-to-bag`,  { hasText: `Add to bag` }).click();
    await page.waitForTimeout(2000);
  });

  test('Slider cart', async () => {
    await page.locator(`a.header-links__link.header-links__link--cart`).hover();
    console.log(`slider cart`);
    console.log(await page.locator(`#cart-item-template:nth-child(2) > div.cart__item-description > a.cart__item--title`).innerText());
    console.log(await page.locator(`#cart-item-template:nth-child(2) > div.cart__item-description > div.cart__item-options > div.cart__item-badge`).innerText());
    console.log(await page.locator(`#cart-item-template:nth-child(2) > div.cart__item-description > div.cart__item--subtitle-container > div.cart__item--subtitle-price`).innerText());
    await page.locator(`a.header-links__link.header-links__link--cart`,  { hasText: `Checkout` }).click();
    await page.pause();
  });

  test('My Bag', async () => {
    console.log(`My Bag`);
    console.log(await page.locator(`td.cart-content__item-price-area > a.cart-content__product-title`).innerText());
    console.log(await page.locator(`td.cart-content__item-price-area > div.cart-content__variant-line > button > span.cart-content__variant-title > span`).innerText());
    console.log(await page.locator(`td.cart-content__item-price-area > div.cart-content__price-line > div.cart-content__item-price.cart-content__item-price--has-discount`).innerText());
    await page.locator(`div.cart-layout__summary.cart-summary > div.cart-summary__payment > a`,  { hasText: `Checkout` }).click();
    await page.pause();
  });
});
