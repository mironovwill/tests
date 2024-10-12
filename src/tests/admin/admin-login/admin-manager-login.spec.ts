import 'dotenv/config';
import { test } from '@playwright/test';
import { AdminLoginPage } from '../../../pages/admin/admin-login-page';
import { AdminTopicsPage } from '../../../pages/admin/admin-topics-page';
import { addAllureLabels } from '../../../utils/allure-utils';

test.use({ storageState: { cookies: [], origins: [] } });

test('Логин под руководителем @allure.id=99', { tag: ['@Admin', '@Regress', '@UI', '@Smoke'] }, async ({ page }) => {
  await addAllureLabels({
    owner: 'Danil Krikotnenko',
    severity: 'criticality',
    epic: 'Авторизация',
    feature: 'Админ панель',
    story: 'Руководитель логин',
    description: 'Тест проверяет авторизацию руководителя в админ-панели.',
    userRole: 'Manager',
    layer: 'ui_tests',
    email: process.env.TEST_USER_MANAGER_EMAIL,
    password: process.env.TEST_USER_PASSWORD,
  });

  const adminLoginPage = new AdminLoginPage(page);
  const adminTopicsPage = new AdminTopicsPage(page);

  await adminLoginPage.visit('/');
  await adminLoginPage.login(process.env.TEST_USER_MANAGER_EMAIL || '', process.env.TEST_USER_PASSWORD || '');
  await adminTopicsPage.checkH1Text();
  await adminTopicsPage.menu.verifyManagerHasNoLinksInMenu();
});
