import * as allure from 'allure-js-commons';
import { TopicTypes } from '../../types/topics';

export async function addAllureLabels({
  owner = 'Unknown',
  tags = [] as string[],
  severity = 'normal',
  epic = 'Без эпика',
  feature = 'Без фичи',
  story = 'Без истории',
  description = 'Без описания',
  userRole = 'Unknown',
  layer = 'ui_tests',
  email = 'test@gmail.com',
  password = '12345678',
}) {
  await allure.owner(owner);
  await allure.tags(...tags);
  await allure.severity(severity);
  await allure.epic(epic);
  await allure.feature(feature);
  await allure.story(story);
  await allure.description(description);
  await allure.parameter('User Role', userRole);
  await allure.layer(layer);
  await allure.parameter('Email', email);
  await allure.parameter('Password', password);
}

export async function mapAllureParameters(parameters: TopicTypes) {
  return Object.entries(parameters).map(async param => {
    await allure.parameter(param[0], param[1]);
  });
}
