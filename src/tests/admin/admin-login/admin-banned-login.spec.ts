import 'dotenv/config';
import { test } from '@playwright/test';
import { AdminLoginPage } from '../../../pages/admin/admin-login-page';
import { addAllureLabels } from '../../../utils/allure-utils';

test.use({ storageState: { cookies: [], origins: [] } });

test('Логин заблокированным пользователем @allure.id=97', { tag: ['@Admin', '@Regress', '@UI'] }, async ({ page }) => {
  await addAllureLabels({
    owner: 'Danil Krikotnenko',
    severity: 'high',
    epic: 'Авторизация',
    feature: 'Админ панель',
    story: 'Логин заблокированным',
    description: 'Тест проверяет авторизацию заблокированным пользователем в админ-панели.',
    userRole: 'Любая',
    layer: 'ui_tests',
    email: process.env.TEST_USER_BANNED_EMAIL,
    password: process.env.TEST_USER_PASSWORD,
  });

  const adminLoginPage = new AdminLoginPage(page);
  await adminLoginPage.visit('/');
  await adminLoginPage.login(process.env.TEST_USER_BANNED_EMAIL || '', process.env.TEST_USER_PASSWORD || '');
  await adminLoginPage.checkBannedUserLoginError();
});
