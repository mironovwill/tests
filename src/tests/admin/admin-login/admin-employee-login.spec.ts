import 'dotenv/config';
import { test } from '@playwright/test';
import { AdminLoginPage } from '../../../pages/admin/admin-login-page';
import { addAllureLabels } from '../../../utils/allure-utils';

test.use({ storageState: { cookies: [], origins: [] } });

test('Логин под пользователем @allure.id=98', { tag: ['@Admin', '@Regress', '@UI'] }, async ({ page }) => {
  await addAllureLabels({
    owner: 'Danil Krikotnenko',
    severity: 'criticality',
    epic: 'Авторизация',
    feature: 'Админ панель',
    story: 'Пользователь логин',
    description: 'Тест проверяет авторизацию пользователя в админ-панели.',
    userRole: 'Employee',
    layer: 'ui_tests',
    email: process.env.TEST_USER_EMPLOYEE_EMAIL,
    password: process.env.TEST_USER_PASSWORD,
  });

  const adminLoginPage = new AdminLoginPage(page);

  await adminLoginPage.visit('/');
  await adminLoginPage.login(process.env.TEST_USER_EMPLOYEE_EMAIL || '', process.env.TEST_USER_PASSWORD || '');
  await adminLoginPage.checkEmployeeLoginError();
});
