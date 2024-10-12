import { Page } from '@playwright/test';
import { Button } from '../../../page-factory';

export class CategoryModal {
  private static readonly SAVE_CATEGORY_BUTTON = '//button[@data-qa="saveCategoryBtn"]';

  private readonly saveCategoryBtn: Button;

  constructor(public page: Page) {
    this.saveCategoryBtn = new Button({
      page,
      locator: CategoryModal.SAVE_CATEGORY_BUTTON,
      name: 'Сохранить',
    });
  }

  async selectCategories(categories: string[]) {
    for (const category of categories) {
      await this.page.getByLabel(category).check();
    }
    await this.saveCategoryBtn.click();
  }
}
