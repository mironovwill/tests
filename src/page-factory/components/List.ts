import test, { expect } from '@playwright/test';
import { Component } from './Component';
import { LocatorProps } from '../../types/page-factory/Сomponent';

export class List extends Component {
  get typeOf(): string {
    return 'list';
  }

  async checkCount(count: number, locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`${this.typeOfUpper} "${this.componentName}" имеет длину "${count}"`, async () => {
      const parentElement = this.getLocator(locatorProps);
      const childrenCount = await parentElement.locator('> *').count();
      expect(childrenCount, {
        message: this.getErrorMessage(`Не имеет длину "${count}"`),
      }).toBe(count);
    });
  }

  async selectListItem(
    selectType: 'role' | 'label' | 'xpath' | 'title' | 'text' | 'name',
    name: string,
    role?: 'menuitem' | 'option',
    locatorProps: LocatorProps = {}
  ) {
    const parentElement = this.getLocator(locatorProps);

    const getLocatorByType = () => {
      switch (selectType) {
        case 'label':
          return parentElement.getByLabel(name, { exact: true }).first();
        case 'role':
          return parentElement.getByRole(role || 'menuitem', { name, exact: true }).first();
        case 'title':
          return parentElement.getByTitle(name).first();
        case 'xpath':
          return parentElement.locator(`//div[normalize-space(text())="${name}"]`).first();
        case 'text':
          return parentElement.getByText(name).first();
        case 'name':
          return parentElement.locator(`[name='${name}']`).first();
        default:
          throw new Error(`Не существует выбора по ${selectType}`);
      }
    };

    await test.step(`В ${this.typeOfUpper} "${this.componentName}" выбран пункт "${name}"`, async () => {
      try {
        const listItem = getLocatorByType();
        await listItem.click();
      } catch (error) {
        throw new Error(`Ошибка при выборе элемента с именем "${name}"`);
      }
    });
  }
}
