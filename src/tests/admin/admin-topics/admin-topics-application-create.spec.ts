import { adminDashboardSetup as test } from '../../../fixtures/admin/admin-extended-test';
import { TopicType } from '../../../types/topics';
import { TopicLevels } from '../../../types/topics';
import { TopicsLanguages } from '../../../types/topics';
import { TopicCategories } from '../../../types/topics';
import { addAllureLabels } from '../../../utils/allure-utils';

const testCaseInfo = {
  owner: 'Danil Krikotnenko',
  severity: 'high',
  epic: 'Добавление материала',
  feature: 'Админ панель',
  story: 'Добавить материал с типом "Приложение"',
  description: 'Тест проверяет успешное создание материала c типом "Приложение" в админ-панели.',
  userRole: 'Superadmin',
  layer: 'ui_tests',
  email: process.env.TEST_USER_SUPERADMIN_EMAIL,
  password: process.env.TEST_USER_PASSWORD,
};

const topicInfo = {
  topicName: 'Приложение',
  description: 'Test description',
  categories: [TopicCategories.WORK_ORGANIZATION],
  topicType: TopicType.APPLICATION,
  level: TopicLevels.BASIC,
  language: TopicsLanguages.RUSSIAN,
  image: '1000x600.png',
  tags: ['test', 'test1', 'test2'],
  skills: ['test123123'],
  corpAccessCheckbox: true,
  hasCertificateCheckbox: true,
  certificateName: 'landscape',
  certificateSeries: '1000',
  certificateNumbersMin: '1',
  certificateNumbersMax: '100',
  badgeCheckbox: true,
  badgeName: 'Енот',
  file: 'test',
  links: ['https://kampus.local'],
  durationH: '10',
  durationM: '10',
  coast: '2020',
};

test(
  'Создание топика с типом "Приложение"',
  { tag: ['@Admin', '@Regress', '@UI'] },
  async ({ adminTopicsPage, adminTopicPage }) => {
    await addAllureLabels(testCaseInfo);

    await adminTopicsPage.visit('/');
    await adminTopicsPage.checkH1Text();
    await adminTopicsPage.clickAddTopicBtn();
    await adminTopicsPage.createTopic(topicInfo);
    await adminTopicsPage.checkSuccessNotification();
    await adminTopicsPage.reload();
    await adminTopicsPage.fillTopicNameSearchInput(topicInfo.topicName);
    await adminTopicsPage.clickFilterSubmitBtn();
    await adminTopicsPage.validateFirstTopicCardName(topicInfo.topicName);
    await adminTopicsPage.clickToFirstTopicCardInList();
    await adminTopicPage.checkTopicAddToPlanCount('0');
    await adminTopicPage.checkTopicVisibilityCount('0');
    await adminTopicPage.checkTopicTypeBadge(topicInfo.topicType);
    await adminTopicPage.checkTopicLevel(topicInfo.level);
    await adminTopicPage.checkTopicBadge(topicInfo.badgeName);
    await adminTopicPage.checkH1Text(topicInfo.topicName);
  }
);
