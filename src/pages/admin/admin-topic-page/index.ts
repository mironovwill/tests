import 'dotenv/config';
import { Page } from '@playwright/test';
import { BasePage } from '../base-page';
import { H1, Input, Text, Button, Image } from '../../../page-factory';

export class AdminTopicPage extends BasePage {
  private static readonly H1 = '//h1[@data-qa="topicTitle"]';
  private static readonly topicId = '//div[@data-qa="adminMaterialDetailId"]/text()';
  private static readonly topicTypeBadge = '//div[@data-qa="adminMaterialDetailTypeBadge"]/div[2]/div';
  private static readonly topicCategory = '//div[@data-qa="materialDetailCategoryLabel"]/div[2]';
  private static readonly topicLevel = '//div[@data-qa="materialDetailLevel"]';
  private static readonly topicBadge = '//a[@data-qa="materialDetailBadge"]';
  private static readonly topicViewTopicBtn = '//div[@data-qa="materialDetailLink"]';
  private static readonly topicCoast = "//div[@id='adminMaterialDetailCoast']/div[2]/text()";
  private static readonly topicCreator = '//div[@data-qa="materialDetailAuthor"]';
  private static readonly topicEditor = '//div[@data-qa="materialDetailEditor"]';
  private static readonly topicViews = '//div[@data-qa="materialDetailViews"]';
  private static readonly topicAddToPlanCount = '//span[@data-qa="adminTopicBlockPlanCount"]';
  private static readonly topicVisibilityCount = '//span[@data-qa="visibilityCount"]';
  private static readonly topicEditBtn = '//button[@data-qa="editMaterialBtn"]';
  private static readonly topicDescription = '//div[@data-qa="adminMaterialDetailDescription"]';
  private static readonly topicImage = '//div[@data-qa="adminMaterialDetailImage"]';
  private static readonly topicTabsNavTopicTab = '//div[@data-node-key="topic"]';
  private static readonly topicTabsNavBlockPlansTab = '//div[@data-node-key="lms"]';
  private static readonly topicAddToPlanBtn = '//button[@data-qa="adminMaterialDetailAddToPlanBtn"]';
  private static readonly topicVisibilitySettingsBtn = '//button[@data-qa="settingsVisibilityTopic"]';
  private static readonly topicCreateCopyBtn = '//button[@data-qa="adminTopicCreatingTemplate"]';
  private static readonly topicPassedModerationBtn = '//button[@data-qa="adminTopicDetailPassedModerationBtn"]';
  private static readonly topicApproveModerationBtn = '//button[@data-qa="adminTopicDetailApproveModerationBtn"]';
  private static readonly topicDiagnosticBtn = '//button[@data-qa="adminTopicDetailDiagnosticBtn"]';

  private readonly h1: H1;
  private readonly topicId: Text;
  private readonly topicTypeBadge: Text;
  private readonly topicCategory: Text;
  private readonly topicLevel: Text;
  private readonly topicBadge: Text;
  private readonly topicViewTopicBtn: Button;
  private readonly topicCoast: Text;
  private readonly topicCreator: Text;
  private readonly topicEditor: Text;
  private readonly topicViews: Text;
  private readonly topicAddToPlanCount: Text;
  private readonly topicVisibilityCount: Text;
  private readonly topicEditBtn: Button;
  private readonly topicDescription: Text;
  private readonly topicTabsNavTopicTab: Button;
  private readonly topicTabsNavBlockPlansTab: Button;
  private readonly topicAddToPlanBtn: Button;
  private readonly topicVisibilitySettingsBtn: Button;
  private readonly topicCreateCopyBtn: Button;
  private readonly topicPassedModerationBtn: Button;
  private readonly topicApproveModerationBtn: Button;
  private readonly topicDiagnosticBtn: Button;
  private readonly topicImage: Image;

  constructor(public page: Page) {
    super(page);

    this.h1 = new Input({
      page,
      locator: AdminTopicPage.H1,
      name: 'Название топика',
    });

    this.topicImage = new Input({
      page,
      locator: AdminTopicPage.topicImage,
      name: 'Обложка топика',
    });

    this.topicId = new Text({
      page,
      locator: AdminTopicPage.topicId,
      name: 'ID топика',
    });

    this.topicTypeBadge = new Text({
      page,
      locator: AdminTopicPage.topicTypeBadge,
      name: 'Тип топика',
    });

    this.topicCategory = new Text({
      page,
      locator: AdminTopicPage.topicCategory,
      name: 'Категория',
    });

    this.topicLevel = new Text({
      page,
      locator: AdminTopicPage.topicLevel,
      name: 'Уровень',
    });

    this.topicBadge = new Text({
      page,
      locator: AdminTopicPage.topicBadge,
      name: 'Награда',
    });

    this.topicViewTopicBtn = new Button({
      page,
      locator: AdminTopicPage.topicViewTopicBtn,
      name: 'Добавлено в план',
    });

    this.topicCoast = new Text({
      page,
      locator: AdminTopicPage.topicCoast,
      name: 'Стоимость',
    });

    this.topicCreator = new Text({
      page,
      locator: AdminTopicPage.topicCreator,
      name: 'Создал',
    });

    this.topicEditor = new Text({
      page,
      locator: AdminTopicPage.topicEditor,
      name: 'Изменил',
    });

    this.topicViews = new Text({
      page,
      locator: AdminTopicPage.topicViews,
      name: 'Просмотров',
    });

    this.topicAddToPlanCount = new Text({
      page,
      locator: AdminTopicPage.topicAddToPlanCount,
      name: 'Количество добавленных юзеров в план',
    });

    this.topicVisibilityCount = new Text({
      page,
      locator: AdminTopicPage.topicVisibilityCount,
      name: 'Количество юзеров, которые могут видеть материал',
    });

    this.topicEditBtn = new Button({
      page,
      locator: AdminTopicPage.topicEditBtn,
      name: 'Редактирование топика',
    });

    this.topicDescription = new Text({
      page,
      locator: AdminTopicPage.topicDescription,
      name: 'Описание',
    });

    this.topicTabsNavTopicTab = new Button({
      page,
      locator: AdminTopicPage.topicTabsNavTopicTab,
      name: 'Материал',
    });

    this.topicTabsNavBlockPlansTab = new Button({
      page,
      locator: AdminTopicPage.topicTabsNavBlockPlansTab,
      name: 'Изучение',
    });

    this.topicAddToPlanBtn = new Button({
      page,
      locator: AdminTopicPage.topicAddToPlanBtn,
      name: 'Добавить',
    });

    this.topicVisibilitySettingsBtn = new Button({
      page,
      locator: AdminTopicPage.topicVisibilitySettingsBtn,
      name: 'Настроить',
    });

    this.topicCreateCopyBtn = new Button({
      page,
      locator: AdminTopicPage.topicCreateCopyBtn,
      name: 'Создать копию',
    });

    this.topicPassedModerationBtn = new Button({
      page,
      locator: AdminTopicPage.topicPassedModerationBtn,
      name: 'Материал промодерирован',
    });

    this.topicApproveModerationBtn = new Button({
      page,
      locator: AdminTopicPage.topicApproveModerationBtn,
      name: 'Промодерировать материал',
    });

    this.topicDiagnosticBtn = new Button({
      page,
      locator: AdminTopicPage.topicDiagnosticBtn,
      name: 'Настройки диагностики Kampus',
    });
  }

  async checkH1Text(topicTitle: string) {
    await this.h1.shouldHaveText(topicTitle);
  }

  async checkTopicTypeBadge(topicType: string) {
    await this.topicTypeBadge.shouldHaveText(topicType);
  }

  async checkTopicCategory(category: string) {
    await this.topicCategory.shouldHaveText(category);
  }

  async checkTopicLevel(level: string) {
    await this.topicLevel.shouldHaveText(level);
  }

  async checkTopicBadge(badgeName: string) {
    await this.topicBadge.shouldHaveText(badgeName);
  }

  async checkTopicId(topicId: string) {
    await this.topicId.shouldHaveText(topicId);
  }

  async clickToTopicViewTopicBtn() {
    await this.topicViewTopicBtn.click();
  }

  async checkTopicCoast(coast: string) {
    await this.topicCoast.shouldHaveText(coast);
  }

  async checkTopicCreator(creator: string) {
    await this.topicCreator.shouldHaveText(creator);
  }

  async checkTopicEditor(editor: string) {
    await this.topicEditor.shouldHaveText(editor);
  }

  async checkTopicViews(viewsCount: string) {
    await this.topicViews.shouldHaveText(viewsCount);
  }

  async checkTopicAddToPlanCount(count: string) {
    await this.topicAddToPlanCount.shouldHaveText(count);
  }

  async checkTopicVisibilityCount(count: string) {
    await this.topicVisibilityCount.shouldHaveText(count);
  }

  async clickToTopicEditBtn() {
    await this.topicEditBtn.click();
  }

  async checkTopicDescription(description: string) {
    await this.topicDescription.shouldHaveText(description);
  }

  async clickToTopicTabsNavTopicTab() {
    await this.topicTabsNavTopicTab.click();
  }

  async clickToTopicTabsBlockPlansTab() {
    await this.topicTabsNavBlockPlansTab.click();
  }

  async clickToTopicAddToPlanBtn() {
    await this.topicAddToPlanBtn.click();
  }

  async clickToTopicVisibilitySettingsBtn() {
    await this.topicVisibilitySettingsBtn.click();
  }

  async clickToTopicCreateCopyBtn() {
    await this.topicCreateCopyBtn.click();
  }

  async clickToTopicPassedModerationBtn() {
    await this.topicPassedModerationBtn.click();
  }

  async clickToTopicApproveModerationBtn() {
    await this.topicApproveModerationBtn.click();
  }

  async clickToTopicDiagnosticBtn() {
    await this.topicDiagnosticBtn.click();
  }

  async checkImageSrc() {
    await this.topicImage.shouldHaveAttribute('src');
  }
}
