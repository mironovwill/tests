import test from '@playwright/test';
import { LocatorProps } from '../../types/page-factory/Сomponent';
import { Component } from './Component';

export class Button extends Component {
  get typeOf(): string {
    return 'button';
  }

  async hover(locatorProps: LocatorProps = {}) {
    await test.step(`Наведение на ${this.typeOf} с именем "${this.componentName}"`, async () => {
      await this.getLocator(locatorProps).hover();
    });
  }
}
