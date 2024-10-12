import { Page } from '@playwright/test';
import { Input, Button, Span } from '../../../page-factory';
import { BasePage } from '../base-page';

export class AdminLoginPage extends BasePage {
  private static readonly WRONG_EMAIL_OR_PASSWORD_TEXT = 'Неверный логин или пароль';
  private static readonly BANNED_USER_TEXT = 'Пользователь заблокирован';
  private static readonly EMPLOYEE_TEXT = 'Вы не авторизованы для этого действия';
  private static readonly EMAIL_INPUT_LOCATOR = '//input[@data-qa="loginUsernameInput"]';
  private static readonly PASSWORD_INPUT_LOCATOR = '//input[@data-qa="loginPasswordInput"]';
  private static readonly LOGIN_BUTTON_LOCATOR = '//button[@data-qa="loginBtn"]';
  private static readonly ERROR_SPAN_LOCATOR = '//div[@class="ant-spin-container"]/div/div/div/form/div/span';

  private readonly emailInput: Input;
  private readonly passwordInput: Input;
  private readonly loginBtn: Button;
  private readonly errorSpan: Span;

  constructor(public page: Page) {
    super(page);

    this.emailInput = new Input({
      page,
      locator: AdminLoginPage.EMAIL_INPUT_LOCATOR,
      name: 'Логин',
    });

    this.passwordInput = new Input({
      page,
      locator: AdminLoginPage.PASSWORD_INPUT_LOCATOR,
      name: 'Пароль',
    });

    this.loginBtn = new Button({
      page,
      locator: AdminLoginPage.LOGIN_BUTTON_LOCATOR,
      name: 'Логин',
    });

    this.errorSpan = new Span({
      page,
      locator: AdminLoginPage.ERROR_SPAN_LOCATOR,
      name: 'Текст ошибки',
    });
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async checkInvalidLoginError() {
    await this.errorSpan.shouldHaveText(AdminLoginPage.WRONG_EMAIL_OR_PASSWORD_TEXT);
  }

  async checkBannedUserLoginError() {
    await this.errorSpan.shouldHaveText(AdminLoginPage.BANNED_USER_TEXT);
  }

  async checkEmployeeLoginError() {
    await this.errorSpan.shouldHaveText(AdminLoginPage.EMPLOYEE_TEXT);
  }
}
