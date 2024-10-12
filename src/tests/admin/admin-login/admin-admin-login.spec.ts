import 'dotenv/config';
import { test } from '@playwright/test';
import { AdminLoginPage } from '../../../pages/admin/admin-login-page';
import { AdminTopicsPage } from '../../../pages/admin/admin-topics-page';
import { addAllureLabels } from '../../../utils/allure-utils';

test.use({ storageState: { cookies: [], origins: [] } });

test('Логин под администратором @allure.id=96', { tag: ['@Admin', '@Regress', '@UI', '@Smoke'] }, async ({ page }) => {
  const adminLoginPage = new AdminLoginPage(page);
  const adminTopicsPage = new AdminTopicsPage(page);

  await addAllureLabels({
    owner: 'Danil Krikotnenko',
    severity: 'criticality',
    epic: 'Авторизация',
    feature: 'Админ панель',
    story: 'Админ логин',
    description: 'Тест проверяет успешную авторизацию администратора в админ-панели.',
    userRole: 'Admin',
    layer: 'ui_tests',
    email: process.env.TEST_USER_ADMIN_EMAIL,
    password: process.env.TEST_USER_PASSWORD,
  });

  await adminLoginPage.visit('/');
  await adminLoginPage.login(process.env.TEST_USER_ADMIN_EMAIL || '', process.env.TEST_USER_PASSWORD || '');
  await adminTopicsPage.checkH1Text();
  await adminTopicsPage.menu.verifyAdminHasNoLinksInMenu();
});
