import 'dotenv/config';
import { Page } from '@playwright/test';
import { BasePage } from '../base-page';
import { H1, Button, Input } from '../../../page-factory';
import { CreateUserModal } from '../../../components/admin/create-user-modal/CreateUserModal';

export class AdminUsersPage extends BasePage {
  private static readonly USERS_H1_TEXT = 'Сотрудники';
  private static readonly H1 = '//h1[@data-qa="usersH1"]';
  private static readonly CREATE_USER_BTN = '//button[@data-qa="createUserBtn"]';
  private static readonly FIO_USER_SEARCH_INPUT = '//input[@dataqa="adminUsersFullNameSearchInput"]';

  private readonly h1: H1;
  private readonly createUserBtn: Button;
  private readonly fioUserSearchInput: Input;
  readonly createUserModal: CreateUserModal;

  constructor(public page: Page) {
    super(page);

    this.createUserModal = new CreateUserModal(page);

    this.h1 = new H1({
      page,
      locator: AdminUsersPage.H1,
      name: 'Название раздела',
    });

    this.createUserBtn = new Button({
      page,
      locator: AdminUsersPage.CREATE_USER_BTN,
      name: 'Создать пользователя',
    });

    this.fioUserSearchInput = new Input({
      page,
      locator: AdminUsersPage.FIO_USER_SEARCH_INPUT,
      name: 'ФИО',
    });
  }

  async visit() {
    await super.visit(`${process.env.CLOUD_ADMIN_DASHBOARD_URL}/users` || '');
  }

  async checkH1Text() {
    await this.h1.shouldHaveText(AdminUsersPage.USERS_H1_TEXT);
  }

  async clickCreateUserBtn() {
    await this.createUserBtn.click();
  }

  async checkCreateUserModalOpen() {
    await this.createUserModal.createUserModal.modalIsOpened();
  }

  async checkCreateUserModalClosed() {
    await this.createUserModal.createUserModal.modalIsClosed();
  }

  async fillFioUserSearchInput(fio: string) {
    await this.fioUserSearchInput.fill(fio);
    await this.page.keyboard.press('Enter');
  }
}
