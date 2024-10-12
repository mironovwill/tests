import test, { expect, Page } from '@playwright/test';

export class BasePage {
  private static readonly HELPDESK_BUTTON = '#button-container';
  private static readonly HELPDESK_IFRAME = 'iframe[name="JSD widget"]';

  constructor(public page: Page) {}

  async visit(url: string) {
    await test.step(`Открытие url "${url}"`, async () => {
      await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    });
  }

  async reload() {
    const currentUrl = this.page.url();

    await test.step(`Перезагрузка страницы с url "${currentUrl}"`, async () => {
      await this.page.reload({ waitUntil: 'domcontentloaded' });
    });
  }

  async checkHelpdeskButton() {
    await test.step(`Проверка отображения helpdesk кнопки на странице"`, async () => {
      const helpdeskBtn = this.page.frameLocator(BasePage.HELPDESK_IFRAME).locator(BasePage.HELPDESK_BUTTON);
      await expect(helpdeskBtn, 'HelpdeskBtn кнопка не отображается').toBeVisible();
    });
  }

  async checkConsoleError() {
    await test.step(`Проверка ошибок на странице "${this.page.url()}"`, async () => {
      this.page.on('console', message => {
        if (
          message.type() === 'error' &&
          message.text() !== 'Failed to load resource: net::ERR_FAILED' &&
          message.text() !== 'Warning: [antd: Dropdown] `overlay` is deprecated. Please use `menu` instead.' &&
          message.text() !== 'Failed to load resource: the server responded with a status of 400 (Bad Request)'
        ) {
          throw new Error(`Страница имеет ошибку в консоли: ${JSON.stringify(message.text())}`);
        }
      });
    });
  }
}
