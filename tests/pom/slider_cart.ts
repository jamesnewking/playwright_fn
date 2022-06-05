import { Page } from "@playwright/test";

export default class SliderCart {
    readonly page: Page;
    readonly sliderCartButton: string;
    readonly productTitle: string;
    readonly productOptionSize: string;
    readonly productPrice: string;

    constructor(page) {
      this.page = page;
      this.sliderCartButton = `a.header-links__link.header-links__link--cart`;
      this.productTitle = `#cart-item-template:nth-child(2) > div.cart__item-description > a.cart__item--title`;
      this.productOptionSize = `#cart-item-template:nth-child(2) > div.cart__item-description > div.cart__item-options > div.cart__item-badge`;
      this.productPrice = `#cart-item-template:nth-child(2) > div.cart__item-description > div.cart__item--subtitle-container > div.cart__item--subtitle-price`;
    };

    get _sliderCartButton() {
      return this.sliderCartButton;
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
  