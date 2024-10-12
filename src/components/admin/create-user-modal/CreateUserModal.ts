import { Page } from '@playwright/test';
import { Input, List, Button, Modal } from '../../../page-factory';
import { UserInfo } from '../../../types/topics/user/UserInfo';

export class CreateUserModal {
  private static readonly NAME_INPUT_LOCATOR = '//input[@data-qa="createUserModalFirstNameInput"]';
  private static readonly LAST_NAME_INPUT_LOCATOR = '//input[@data-qa="createUserModalLastNameInput"]';
  private static readonly MIDDLE_NAME_INPUT_LOCATOR = '//input[@data-qa="createUserModalMiddleNameInput"]';
  private static readonly EMAIL_INPUT_LOCATOR = '//input[@data-qa="createUserModalEmailInput"]';
  private static readonly PASSWORD_INPUT_LOCATOR = '//input[@data-qa="createUserModalPasswordInput"]';
  private static readonly PASSWORD_CONFIRM_INPUT_LOCATOR = '//input[@data-qa="createUserModalConfirmPasswordInput"]';
  private static readonly ROLE_INPUT_LOCATOR = '//input[@id="createUserModalRoleSelect"]';
  private static readonly DEPARTMENT_INPUT_LOCATOR = '//input[@id="createUserModalDepartmentSelect"]';
  private static readonly FUNCTION_INPUT_LOCATOR = '//input[@data-qa="createUserModalFunctionInput"]';
  private static readonly POSITION_INPUT_LOCATOR = '//input[@id="createUserModalPositionSelect"]';
  private static readonly LOCATION_INPUT_LOCATOR = '//input[@data-qa="createUserModalLocationInput"]';
  private static readonly COMPANY_INPUT_LOCATOR = '//input[@data-qa="createUserModalSubCompanyInput"]';
  private static readonly MANAGER_INPUT_LOCATOR = '//input[@id="createUserModalManagerSelect"]';
  private static readonly CREATE_BTN_LOCATOR = '//button[@data-qa="createUserSubmitBtn"]';
  private static readonly CREATE_USER_MODAL = '//div[@data-qa="createUserModal"]/div[2]/div';
  private static readonly RESULT_LIST = '//div[@class="rc-virtual-list-holder-inner"]';

  private readonly firstNameInput: Input;
  private readonly lastNameInput: Input;
  private readonly middleNameInput: Input;
  private readonly emailInput: Input;
  private readonly passwordInput: Input;
  private readonly confPasswordInput: Input;
  private readonly roleInput: Input;
  private readonly roleResultList: List;
  private readonly departmentInput: Input;
  private readonly departmentResultList: List;
  private readonly functionInput: Input;
  private readonly positionInput: Input;
  private readonly positionResultList: List;
  private readonly locationInput: Input;
  private readonly companyInput: Input;
  private readonly managerInput: Input;
  private readonly managerResultList: List;
  private readonly createBtn: Button;
  readonly createUserModal: Modal;

  constructor(public page: Page) {
    this.createUserModal = new Modal({
      page,
      locator: CreateUserModal.CREATE_USER_MODAL,
      name: 'Создание юзера',
    });

    this.firstNameInput = new Input({
      page,
      locator: CreateUserModal.NAME_INPUT_LOCATOR,
      name: 'Имя',
    });

    this.lastNameInput = new Input({
      page,
      locator: CreateUserModal.LAST_NAME_INPUT_LOCATOR,
      name: 'Фамилия',
    });

    this.middleNameInput = new Input({
      page,
      locator: CreateUserModal.MIDDLE_NAME_INPUT_LOCATOR,
      name: 'Отчество',
    });

    this.emailInput = new Input({
      page,
      locator: CreateUserModal.EMAIL_INPUT_LOCATOR,
      name: 'Email',
    });

    this.passwordInput = new Input({
      page,
      locator: CreateUserModal.PASSWORD_INPUT_LOCATOR,
      name: 'Пароль',
    });

    this.confPasswordInput = new Input({
      page,
      locator: CreateUserModal.PASSWORD_CONFIRM_INPUT_LOCATOR,
      name: 'Подтверждение пароля',
    });

    this.roleInput = new Input({
      page,
      locator: CreateUserModal.ROLE_INPUT_LOCATOR,
      name: 'Роль',
    });

    this.roleResultList = new List({
      page,
      locator: CreateUserModal.RESULT_LIST,
      name: 'Роли',
    });

    this.departmentInput = new Input({
      page,
      locator: CreateUserModal.DEPARTMENT_INPUT_LOCATOR,
      name: 'Отдел',
    });

    this.departmentResultList = new List({
      page,
      locator: CreateUserModal.DEPARTMENT_INPUT_LOCATOR,
      name: 'Отделы',
    });

    this.functionInput = new Input({
      page,
      locator: CreateUserModal.FUNCTION_INPUT_LOCATOR,
      name: 'Функция',
    });

    this.positionInput = new Input({
      page,
      locator: CreateUserModal.POSITION_INPUT_LOCATOR,
      name: 'Должность',
    });

    this.positionResultList = new List({
      page,
      locator: CreateUserModal.POSITION_INPUT_LOCATOR,
      name: 'Должности',
    });

    this.locationInput = new Input({
      page,
      locator: CreateUserModal.LOCATION_INPUT_LOCATOR,
      name: 'Локация',
    });

    this.companyInput = new Input({
      page,
      locator: CreateUserModal.COMPANY_INPUT_LOCATOR,
      name: 'Компания',
    });

    this.managerInput = new Input({
      page,
      locator: CreateUserModal.MANAGER_INPUT_LOCATOR,
      name: 'Руководитель',
    });

    this.managerResultList = new List({
      page,
      locator: CreateUserModal.MANAGER_INPUT_LOCATOR,
      name: 'Руководители',
    });

    this.createBtn = new Button({
      page,
      locator: CreateUserModal.CREATE_BTN_LOCATOR,
      name: 'Создать пользователя',
    });
  }

  async fillFirstNameInput(name: string) {
    await this.firstNameInput.fill(name);
  }

  async fillLastNameInput(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async fillMiddleNameInput(middleName: string) {
    await this.middleNameInput.fill(middleName);
  }

  async fillEmailInput(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillPasswordConfInput(passwordConf: string) {
    await this.confPasswordInput.fill(passwordConf);
  }

  async selectRole(role: string) {
    await this.roleInput.fill(role);
    await this.roleResultList.selectListItem('text', role, 'option');
  }

  async selectDepartment(department: string) {
    await this.departmentInput.fill(department);
    await this.departmentResultList.selectListItem('text', department, 'option');
  }

  async fillFunctionInput(functions: string) {
    await this.functionInput.fill(functions);
  }

  async selectPosition(position: string) {
    await this.positionInput.fill(position);
    await this.positionResultList.selectListItem('text', position, 'option');
  }

  async fillLocationInput(location: string) {
    await this.locationInput.fill(location);
  }

  async fillCompanyInput(company: string) {
    await this.companyInput.fill(company);
  }

  async selectManager(manager: string) {
    await this.managerInput.fill(manager);
    await this.managerResultList.selectListItem('text', manager, 'option');
  }

  async clickCreateBtn() {
    await this.createBtn.click();
  }

  async fillUserFields(userInfo: UserInfo) {
    await this.fillFirstNameInput(userInfo.firstName);
    await this.fillLastNameInput(userInfo.lastName);
    await this.fillEmailInput(userInfo.email);
    await this.fillPasswordInput(userInfo.password);
    await this.fillPasswordConfInput(userInfo.passwordConf);
    await this.selectRole(userInfo.role);
    userInfo.middleName && (await this.fillMiddleNameInput(userInfo.middleName));
    userInfo.position && (await this.selectPosition(userInfo.position));
    userInfo.function && (await this.fillFunctionInput(userInfo.function));
    userInfo.department && (await this.selectDepartment(userInfo.department));
    userInfo.location && (await this.fillLocationInput(userInfo.location));
    userInfo.company && (await this.fillCompanyInput(userInfo.company));
    userInfo.manager && (await this.selectManager(userInfo.manager));
  }
}
