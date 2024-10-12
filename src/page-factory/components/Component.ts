import { expect, Locator, Page, test } from '@playwright/test';
import { ComponentProps, LocatorProps } from '../../types/page-factory/Сomponent';
import { capitalizeFirstLetter } from '../../utils/generic';
import { locatorTemplateFormat } from '../../utils/page-factory';

export abstract class Component {
  page: Page;
  locator: string;
  private readonly name: string | undefined;

  constructor({ page, locator, name }: ComponentProps) {
    this.page = page;
    this.locator = locator;
    this.name = name;
  }

  getLocator(props: LocatorProps = {}): Locator {
    const { locator, ...context } = props;
    const withTemplate = locatorTemplateFormat(locator || this.locator, context);

    return this.page.locator(withTemplate);
  }

  get typeOf(): string {
    return 'component';
  }

  get typeOfUpper(): string {
    return capitalizeFirstLetter(this.typeOf);
  }

  get componentName(): string {
    if (!this.name) {
      throw Error('Укажите свойство «name», чтобы использовать «componentName»');
    }

    return this.name;
  }

  getErrorMessage(action: string): string {
    return `Компонент ${this.typeOf} с именем "${this.componentName}" и локатором ${this.locator} ${action}`;
  }

  async shouldBeVisible(locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`${this.typeOfUpper} "${this.componentName}" отображен на странице`, async () => {
      await expect(this.getLocator(locatorProps), {
        message: this.getErrorMessage('Не отображается'),
      }).toBeVisible();
    });
  }

  async shouldBeNotVisible(locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`${this.typeOfUpper} "${this.componentName}" не отображен на странице`, async () => {
      await expect(this.getLocator(locatorProps), {
        message: this.getErrorMessage('Отображается'),
      }).toBeHidden();
    });
  }

  async shouldHaveText(text: string, locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`${this.typeOfUpper} "${this.componentName}" имеет текст "${text}"`, async () => {
      await expect(this.getLocator(locatorProps), {
        message: this.getErrorMessage(`Не имеет текст "${text}"`),
      }).toContainText(text);
    });
  }

  async shouldHaveAttribute(attribute: string, locatorProps: LocatorProps = {}, value?: string): Promise<void> {
    const description = `${this.typeOfUpper} "${this.componentName}" имеет атрибут "${attribute}"`;

    await test.step(description, async () => {
      const locator = this.getLocator(locatorProps);

      // eslint-disable-next-line playwright/no-conditional-in-test
      if (value) {
        const errorMessage = this.getErrorMessage(`Не имеет атрибут "${attribute}" с значением "${value}"`);
        await expect(locator, { message: errorMessage }).toHaveAttribute(attribute, value);
      } else {
        const errorMessage = this.getErrorMessage(`Не имеет атрибут "${attribute}"`);
        await expect(locator, { message: errorMessage }).toHaveAttribute(attribute);
      }
    });
  }

  async click(locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`Клик на ${this.typeOf} с именем "${this.componentName}"`, async () => {
      await this.getLocator(locatorProps).click();
    });
  }

  async doubleClick(locatorProps: LocatorProps = {}) {
    await test.step(`Даблклик на ${this.typeOf} с именем "${this.componentName}"`, async () => {
      await this.getLocator(locatorProps).dblclick();
    });
  }
}
