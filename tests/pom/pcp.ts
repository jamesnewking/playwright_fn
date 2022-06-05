import { Page } from "@playwright/test";

export default class Pcp {
    readonly page: Page;
    readonly navDresses: string;
    readonly productTile: string;

    constructor(page) {
      this.page = page;
      this.navDresses = `text="Dresses"`;
      this.productTile = `div.product-tile__product-title > a`;
    };

    get _navDresses() {
      return this.navDresses;
    }

    get _productTile() {
      return this.productTile;
    }
  }
  