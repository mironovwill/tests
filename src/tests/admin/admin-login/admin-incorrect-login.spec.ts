import { test } from '@playwright/test';
import { AdminLoginPage } from '../../../pages/admin/admin-login-page';
import { addAllureLabels } from '../../../utils/allure-utils';

const loginData = {
  email: 'test@test.com',
  password: 'password',
};

test.use({ storageState: { cookies: [], origins: [] } });

test('Логин с некорректными данными @allure.id=95', { tag: ['@Admin', '@Regress', '@UI'] }, async ({ page }) => {
  await addAllureLabels({
    owner: 'Danil Krikotnenko',
    severity: 'criticality',
    epic: 'Авторизация',
    feature: 'Админ панель',
    story: 'Некорректный логин',
    description: 'Тест проверяет логин с некорректными данными в админ-панели.',
    userRole: 'Любая',
    layer: 'ui_tests',
    email: loginData.email,
    password: loginData.password,
  });

  const adminLoginPage = new AdminLoginPage(page);
  await adminLoginPage.visit('/');
  await adminLoginPage.login(loginData.email, loginData.password);
  await adminLoginPage.checkInvalidLoginError();
});
