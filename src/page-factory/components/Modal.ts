import test, { expect } from '@playwright/test';
import { LocatorProps } from '../../types/page-factory/Сomponent';
import { Component } from './Component';

export class Modal extends Component {
  get typeOf(): string {
    return 'modal';
  }

  async modalIsOpened(locatorProps: LocatorProps = {}) {
    await test.step(`${this.typeOfUpper} с именем "${this.componentName}" открыта`, async () => {
      await expect(this.getLocator(locatorProps), {
        message: super.getErrorMessage(`Модалка не открыта`),
      }).toBeVisible();
    });
  }

  async modalIsClosed(locatorProps: LocatorProps = {}) {
    await test.step(`${this.typeOfUpper} с именем "${this.componentName}" закрыта`, async () => {
      await expect(this.getLocator(locatorProps), {
        message: super.getErrorMessage(`Модалка открыта`),
      }).toBeVisible();
    });
  }
}
