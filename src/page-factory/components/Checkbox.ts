import { Component } from './Component';
import { LocatorProps } from '../../types/page-factory/Сomponent';
import test, { expect } from '@playwright/test';

export class Checkbox extends Component {
  get typeOf(): string {
    return 'checkbox';
  }

  async check(locatorProps: LocatorProps = {}) {
    await test.step(`${this.typeOf} "${this.componentName}" выбран`, async () => {
      await this.getLocator(locatorProps).check();
    });
  }

  async shouldBeChecked(locatorProps: LocatorProps = {}) {
    await test.step(`${this.typeOf} "${this.componentName}" включен`, async () => {
      expect(this.getLocator(locatorProps), {
        message: super.getErrorMessage(`Выключен`),
      }).toBeTruthy();
    });
  }

  async shouldBeUnchecked(locatorProps: LocatorProps = {}) {
    await test.step(`${this.typeOf} "${this.componentName}" выключен`, async () => {
      expect(this.getLocator(locatorProps), {
        message: super.getErrorMessage(`Включен`),
      }).toBeFalsy();
    });
  }

  async shouldBeDisabled(locatorProps: LocatorProps = {}) {
    await test.step(`${this.typeOf} "${this.componentName}" заблокирован`, async () => {
      await expect(this.getLocator(locatorProps), {
        message: super.getErrorMessage(`Разблокирован`),
      }).toBeDisabled();
    });
  }
}
