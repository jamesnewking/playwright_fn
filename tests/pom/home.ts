import { Page } from "@playwright/test";

export default class HomePage {
    readonly page: Page;
    readonly url: string;
    readonly homePageTitle: string;
    readonly popUpCloseButton: string;
    readonly navNewIn: string;
    readonly navSale: string;
    readonly navMostWanted: string;

    constructor(page) {
      this.page = page;
      this.url = `https://www.fashionnova.com/`;
      this.homePageTitle = `Fashion Nova | Fashion Online For Women | Affordable Women's Clothing | Fashion Nova`;
      this.popUpCloseButton = 'a.bx-close.bx-close-link.bx-close-inside';
      this.navNewIn = `text="New In"`;
      this.navSale = `text="Sale"`;
      this.navMostWanted = `text="Most Wanted"`;
    };

    get _url() {
      return this.url;
    }
  
    get _homePageTitle() {
      return this.homePageTitle;
    }
      
    get _popUpCloseButton() {
      return this.popUpCloseButton;
    }
      
    get _navNewIn() {
      return this.navNewIn;
    }

    get _navSale() {
      return this.navSale;
    }

    get _navMostWanted() {
      return this.navMostWanted;
    }
  }
  