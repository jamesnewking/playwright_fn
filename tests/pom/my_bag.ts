import { Page } from "@playwright/test";

export default class MyBag {
    readonly page: Page;
    readonly checkOutButton: string;
    readonly productTitle: string;
    readonly productOptionSize: string;
    readonly productPrice: string;

    constructor(page) {
      this.page = page;
      this.checkOutButton = `div.cart-layout__summary.cart-summary > div.cart-summary__payment > a`;
      this.productTitle = `td.cart-content__item-price-area > a.cart-content__product-title`;
      this.productOptionSize = `td.cart-content__item-price-area > div.cart-content__variant-line > button > span.cart-content__variant-title > span`;
      this.productPrice = `td.cart-content__item-price-area > div.cart-content__price-line > div.cart-content__item-price.cart-content__item-price--has-discount`;
    };

    get _checkOutButton() {
      return this.checkOutButton;
    };

    get _productTitle() {
      return this.productTitle;
    };

    get _productOptionSize() {
      return this.productOptionSize;
    };

    get _productPrice() {
      return this.productPrice;
    };
  }
  