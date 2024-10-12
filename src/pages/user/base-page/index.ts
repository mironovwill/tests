import test, { Page } from '@playwright/test';
import { Navbar } from '../../../components/user/navigation/Navbar';

export class BasePage {
  readonly navbar: Navbar;

  constructor(public page: Page) {
    this.navbar = new Navbar(page);
  }

  async visit(url: string) {
    await test.step(`Opening the url "${url}"`, async () => {
      await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    });
  }

  async reload() {
    const currentUrl = this.page.url();

    await test.step(`Reloading page with url "${currentUrl}"`, async () => {
      await this.page.reload({ waitUntil: 'domcontentloaded' });
    });
  }
}
