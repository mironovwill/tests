import { adminDashboardSetup as test } from '../../../fixtures/admin/admin-extended-test';
import { UserRoles } from '../../../types/topics/enums/UserRoles';
import { addAllureLabels } from '../../../utils/allure-utils';

const userInfo = {
  firstName: 'Тест',
  lastName: 'Тестовый',
  middleName: 'Тестович',
  email: 'test12312312312312325212@mail.ru',
  password: 'qweasd123',
  passwordConf: 'qweasd123',
  role: UserRoles.EMPLOYEE,
  // department: 'stringтест2',
  function: 'тестовая функция',
  // position: 'stringтест2',
  location: 'тестовая локация',
  company: 'тестовая компания',
  // manager: 'рука Тест',
};

test('Создание пользователя вручную', { tag: ['@Admin', '@Regress', '@UI'] }, async ({ adminUsersPage }) => {
  await addAllureLabels({
    owner: 'Danil Krikotnenko',
    severity: 'medium',
    epic: 'Юзеры',
    feature: 'Админ панель',
    story: 'Создание пользователя вручную',
    description: 'Тест проверяет успешное создание пользователя вручную в админ-панели.',
    userRole: 'Superadmin',
    layer: 'ui_tests',
    email: process.env.TEST_USER_ADMIN_EMAIL,
    password: process.env.TEST_USER_PASSWORD,
  });

  await adminUsersPage.visit();
  await adminUsersPage.checkH1Text();
  await adminUsersPage.clickCreateUserBtn();
  await adminUsersPage.checkCreateUserModalOpen();
  await adminUsersPage.createUserModal.fillUserFields(userInfo);
  await adminUsersPage.createUserModal.clickCreateBtn();
  await adminUsersPage.checkCreateUserModalClosed();
  await adminUsersPage.fillFioUserSearchInput(userInfo.firstName + ' ' + userInfo.lastName);
});
