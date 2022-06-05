import { Page } from "@playwright/test";

export default class Pdp {
    readonly page: Page;
    readonly productTitle: string;
    readonly sizeButton: string;
    readonly addToBagButton: string;

    constructor(page) {
      this.page = page;
      this.productTitle = `h1.product-info__title`;
      this.sizeButton = `span.product-info__size-button-label`;
      this.addToBagButton = `text="Add to bag"`;
    };

    get _productTitle() {
      return this.productTitle;
    };

    get _sizeButton() {
      return this.sizeButton;
    };

    get _addToBagButton() {
      return this.addToBagButton;
    };
  }
  