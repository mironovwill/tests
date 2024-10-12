import { adminDashboardSetup as test } from '../../../fixtures/admin/admin-extended-test';
import { addAllureLabels } from '../../../utils/allure-utils';

const testCaseInfo = {
  owner: 'Danil Krikotnenko',
  severity: 'medium',
  epic: 'Helpdesk',
  feature: 'Админ панель',
  story: 'Отображение значка helpdesk',
  description: 'Тест проверяет успешное отображение значка helpdesk в админ-панели.',
  userRole: 'Любая',
  layer: 'ui_tests',
  email: process.env.TEST_USER_SUPERADMIN_EMAIL,
  password: process.env.TEST_USER_PASSWORD,
};

test(
  'Отображение значка helpdesk в админ части',
  { tag: ['@Admin', '@Regress', '@UI', '@Smoke'] },
  async ({ adminTopicsPage }) => {
    await addAllureLabels(testCaseInfo);

    await adminTopicsPage.visit('/');
    await adminTopicsPage.checkH1Text();
    await adminTopicsPage.checkHelpdeskButton();
  }
);
