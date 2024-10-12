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
  story: 'Добавить материал с типом "Тест"',
  description: 'Тест проверяет успешное создание материала c типом "Тест" в админ-панели.',
  userRole: 'Superadmin',
  layer: 'ui_tests',
  email: process.env.TEST_USER_SUPERADMIN_EMAIL,
  password: process.env.TEST_USER_PASSWORD,
};

const topicInfo = {
  topicName: 'Тест',
  description: 'Test description',
  categories: [TopicCategories.WORK_ORGANIZATION],
  topicType: TopicType.TEST,
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
  authors: ['test123'],
  year: '2020',
  durationH: '10',
  durationM: '10',
};

test('Создание топика с типом "Тест"', { tag: ['@Admin', '@Regress', '@UI'] }, async ({ adminTopicsPage }) => {
  await addAllureLabels(testCaseInfo);

  await adminTopicsPage.visit('/');
  await adminTopicsPage.checkH1Text();
  await adminTopicsPage.clickAddTopicBtn();
  await adminTopicsPage.createTopic(topicInfo);
});
