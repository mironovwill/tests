import 'dotenv/config';
import { test as setup } from '@playwright/test';
import { AdminLoginPage } from '../../pages/admin/admin-login-page';
import { AdminTopicsPage } from '../../pages/admin/admin-topics-page';
import { addAllureLabels } from '../../utils/allure-utils';

const authFile = '.auth/admin.json';

setup(
  'Авторизация в админ панели под суперадминистратором @allure.id=89',
  { tag: ['@Admin', '@Regress', '@UI', '@Smoke'] },
  async ({ page }) => {
    if (
      !process.env.CLOUD_ADMIN_DASHBOARD_URL ||
      !process.env.TEST_USER_SUPERADMIN_EMAIL ||
      !process.env.TEST_USER_PASSWORD
    ) {
      throw new Error(
        'Необходимо установить переменные окружения: CLOUD_ADMIN_DASHBOARD_URL, TEST_USER_EMAIL и TEST_USER_PASSWORD'
      );
    }

    await addAllureLabels({
      owner: 'Danil Krikotnenko',
      severity: 'criticality',
      epic: 'Авторизация',
      feature: 'Админ панель',
      story: 'Суперадминистратор логин',
      description: 'Тест проверяет успешную авторизацию суперадминистратора в админ-панели.',
      userRole: 'Superadmin',
      layer: 'ui_tests',
      email: process.env.TEST_USER_SUPERADMIN_EMAIL,
      password: process.env.TEST_USER_PASSWORD,
    });

    const adminLoginPage = new AdminLoginPage(page);
    const adminTopicsPage = new AdminTopicsPage(page);

    await adminLoginPage.visit(process.env.CLOUD_ADMIN_DASHBOARD_URL);

    await adminLoginPage.login(process.env.TEST_USER_SUPERADMIN_EMAIL, process.env.TEST_USER_PASSWORD);

    await adminTopicsPage.checkH1Text();

    await page.context().storageState({ path: authFile });
  }
);
