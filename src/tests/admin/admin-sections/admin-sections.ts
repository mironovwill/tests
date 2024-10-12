import { adminDashboardSetup as test } from '../../../fixtures/admin/admin-extended-test';
import { ListItem } from '../../../page-factory';
import { addAllureLabels } from '../../../utils/allure-utils';

test('Работа разделов', { tag: ['Admin', 'Regress', 'UI', 'SMOKE'] }, async ({ adminTopicsPage }) => {
  await addAllureLabels({
    owner: 'Danil Krikotnenko',
    tags: ['Admin', 'Regress', 'UI', 'SMOKE'],
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

  const clickAndCheckError = async (menuItem: ListItem) => {
    await menuItem.click();
    await adminTopicsPage.checkConsoleError();
  };

  await adminTopicsPage.visit('/');
  await adminTopicsPage.checkH1Text();

  const menuItems = [
    adminTopicsPage.menu.questionBankMenuItem,
    adminTopicsPage.menu.compilationsMenuItem,
    adminTopicsPage.menu.tracksMenuItem,
    adminTopicsPage.menu.newsMenuItem,
    adminTopicsPage.menu.manageCourseMenuItem,
    adminTopicsPage.menu.eventsMenuItem,
    adminTopicsPage.menu.d360MenuItem,
    adminTopicsPage.menu.tagDirectoryMenuItem,
    adminTopicsPage.menu.skillsDirectoryMenuItem,
    adminTopicsPage.menu.competenceDirectoryMenuItem,
    adminTopicsPage.menu.authorsDirectoryMenuItem,
    adminTopicsPage.menu.postDirectoryMenuItem,
    adminTopicsPage.menu.departmentDirectoryMenuItem,
    adminTopicsPage.menu.functionDirectoryMenuItem,
    adminTopicsPage.menu.mailsNotificationsMenuItem,
    adminTopicsPage.menu.mailsMailingMenuItem,
    adminTopicsPage.menu.loggingMenuItem,
    adminTopicsPage.menu.loggingAdminMenuItem,
    adminTopicsPage.menu.mentorsMenuItem,
    adminTopicsPage.menu.menteeMenuItem,
    adminTopicsPage.menu.productsMenuItem,
    adminTopicsPage.menu.ordersMenuItem,
  ];

  await adminTopicsPage.menu.openDirectoriesList();
  await adminTopicsPage.menu.openLearningStatisticList();
  await adminTopicsPage.menu.openMailsSettingsList();
  await adminTopicsPage.menu.openShopList();
  await adminTopicsPage.menu.openMentorsList();

  for (const menuItem of menuItems) {
    await clickAndCheckError(menuItem);
  }
});
