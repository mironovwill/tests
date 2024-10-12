import test, { expect } from '@playwright/test';
import { LocatorProps } from '../../types/page-factory/Сomponent';
import { Component } from './Component';
import path from 'node:path';

type FillProps = { validateValue?: boolean } & LocatorProps;

export class Input extends Component {
  get typeOf(): string {
    return 'input';
  }

  async fill(value: string, fillProps: FillProps = {}) {
    const { validateValue, ...locatorProps } = fillProps;

    await test.step(`Заполнить ${this.typeOf} "${this.componentName}" значением "${value}"`, async () => {
      const locator = this.getLocator(locatorProps);
      await locator.fill(value);

      // eslint-disable-next-line playwright/no-conditional-in-test
      if (validateValue) {
        await this.shouldHaveValue(value, locatorProps);
      }
    });
  }

  async shouldHaveValue(value: string, locatorProps: LocatorProps = {}) {
    await test.step(`${this.typeOf} "${this.componentName}" имеет значение "${value}"`, async () => {
      await expect(
        this.getLocator(locatorProps),
        this.getErrorMessage(`${this.typeOf} "${this.componentName}" не имеет значение "${value}"`)
      ).toHaveValue(value);
    });
  }

  async uploadFile(file: string, locatorProps: LocatorProps = {}) {
    await test.step(`В ${this.typeOf} "${this.componentName}" загружен файл "${file}"`, async () => {
      await this.getLocator(locatorProps).setInputFiles(path.resolve(__dirname, `../../assets/${file}`));
    });
  }
}
