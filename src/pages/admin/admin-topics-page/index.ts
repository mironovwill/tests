import { Page } from '@playwright/test';
import { Button, H1, Input, Notification, Link } from '../../../page-factory';
import { BasePage } from '../base-page';
import { Menu } from '../../../components/admin/navigation/Menu';
import { TopicModal } from '../../../components/admin/topic-modal/TopicModal';
import { TopicTypes } from '../../../types/topics';

export class AdminTopicsPage extends BasePage {
  private static readonly TOPIC_H1_TEXT = 'Материалы';
  private static readonly H1 = '//h1[@data-qa="topicsH1"]';
  private static readonly ADD_TOPIC_BTN = '//button[@data-qa="addTopicBtn"]';
  private static readonly FILTER_SUBMIT_BTN = '//button[@data-qa="filterSubmitBtn"]';
  private static readonly TOPIC_NAME_SEARCH_INPUT = '//input[@id="name"]';
  private static readonly NOTIFICATION = '//div[@class="message"]';
  private static readonly NOTIFICATION_SUCCESS_MESSAGE = 'Поздравляем! Новый материал загружен в Базу знаний';
  private static readonly FILTER_CLEAR_BTN = '//button[@data-qa="filterClearBtn"]';
  private static readonly FIRST_TOPIC_CARD = '(//div[@id="topicCard"])[1]';
  private static readonly FIRST_TOPIC_CARD_NAME = '(//div[@id="topicCardName"]/div/div)[1]';

  readonly menu: Menu;
  readonly topicModal: TopicModal;
  private readonly h1: H1;
  private readonly addTopicBtn: Button;
  private readonly filterSubmitBtn: Button;
  private readonly topicNameSearchInput: Input;
  private readonly notification: Notification;
  private readonly filterClearBtn: Button;
  private readonly firstTopicCard: Link;
  private readonly firstTopicCardName: Link;

  constructor(public page: Page) {
    super(page);

    this.menu = new Menu(page);

    this.topicModal = new TopicModal(page);

    this.firstTopicCard = new Link({
      page,
      locator: AdminTopicsPage.FIRST_TOPIC_CARD,
      name: 'Первая карточка топика в списке',
    });

    this.firstTopicCardName = new Button({
      page,
      locator: AdminTopicsPage.FIRST_TOPIC_CARD_NAME,
      name: 'Название первой карточки топика в списке',
    });

    this.h1 = new H1({
      page,
      locator: AdminTopicsPage.H1,
      name: 'Название раздела',
    });

    this.addTopicBtn = new Button({
      page,
      locator: AdminTopicsPage.ADD_TOPIC_BTN,
      name: 'Добавить материал',
    });

    this.filterSubmitBtn = new Button({
      page,
      locator: AdminTopicsPage.FILTER_SUBMIT_BTN,
      name: 'Применить',
    });

    this.topicNameSearchInput = new Input({
      page,
      locator: AdminTopicsPage.TOPIC_NAME_SEARCH_INPUT,
      name: 'Найти материал',
    });

    this.notification = new Notification({
      page,
      locator: AdminTopicsPage.NOTIFICATION,
      name: 'Алерт',
    });

    this.filterClearBtn = new Button({
      page,
      locator: AdminTopicsPage.FILTER_CLEAR_BTN,
      name: 'Сбросить',
    });
  }

  async checkH1Text() {
    await this.h1.shouldBeVisible();
    await this.h1.shouldHaveText(AdminTopicsPage.TOPIC_H1_TEXT);
  }

  async checkSuccessNotification() {
    await this.notification.shouldBeVisible();
    await this.notification.shouldHaveText(AdminTopicsPage.NOTIFICATION_SUCCESS_MESSAGE);
  }

  async clickAddTopicBtn() {
    await this.addTopicBtn.click();
  }

  async clickFilterClearBtn() {
    await this.filterClearBtn.click();
  }

  async fillTopicNameSearchInput(topicName: string) {
    await this.topicNameSearchInput.fill(topicName);
  }

  async clickFilterSubmitBtn() {
    await this.filterSubmitBtn.click();
  }

  private async fillBasicTopicFields(topic: TopicTypes) {
    await this.topicModal.modal.modalIsOpened();
    await this.topicModal.fillTopicName(topic.topicName);
    await this.topicModal.fillDescription(topic.description);
    await this.topicModal.selectTopicType(topic.topicType);
    await this.topicModal.selectLevel(topic.level);
    await this.topicModal.selectLanguage(topic.language);
    await this.topicModal.clickCategoryBtn();
    await this.topicModal.categoryModal.selectCategories(topic.categories);

    topic.tags && (await this.topicModal.fillTags(topic.tags));
    topic.skills && (await this.topicModal.fillSkills(topic.skills));
    topic.image && (await this.topicModal.uploadImage(topic.image));
    topic.image && (await this.topicModal.deleteImageBtn.shouldBeVisible());
    topic.eventCheckbox && (await this.topicModal.checkEventCheckbox());
    topic.approveCheckbox && (await this.topicModal.checkApproveCheckbox());
    topic.corpAccessCheckbox && (await this.topicModal.checkCorpAccessCheckbox());
    topic.hasCertificateCheckbox && (await this.topicModal.checkHasCertificateCheckbox());
    topic.certificateName && (await this.topicModal.selectCertificate(topic.certificateName));
    topic.certificateSeries && (await this.topicModal.fillCertificateSeriesInput(topic.certificateSeries));
    topic.certificateNumbersMin && (await this.topicModal.fillCertificateNumbersMinInput(topic.certificateNumbersMin));
    topic.certificateNumbersMax && (await this.topicModal.fillCertificateNumbersMaxInput(topic.certificateNumbersMax));
    topic.badgeCheckbox && (await this.topicModal.checkBadgeCheckbox());
    topic.badgeName && (await this.topicModal.selectBadge(topic.badgeName));
  }

  private async fillAdditionalFields(topic: TopicTypes) {
    if ('links' in topic) {
      topic.links && (await this.topicModal.fillLinkInput(topic.links));
    }
    if ('authors' in topic) {
      topic.authors && (await this.topicModal.fillAuthorInput(topic.authors));
    }
    if ('company' in topic) {
      topic.company && (await this.topicModal.fillCompanyInput(topic.company));
    }
    if ('paper' in topic) {
      topic.paper && (await this.topicModal.checkInPaperCheckbox());
    }
    if ('addressBook' in topic) {
      topic.addressBook && (await this.topicModal.fillAddressBookInput(topic.addressBook));
    }
    if ('coast' in topic) {
      topic.coast && (await this.topicModal.fillCostInput(topic.coast));
    }
    if ('year' in topic) {
      topic.year && (await this.topicModal.fillYearInput(topic.year));
    }
    if ('durationH' in topic) {
      topic.durationH && (await this.topicModal.fillHoursInput(topic.durationH));
    }
    if ('durationM' in topic) {
      topic.durationM && (await this.topicModal.fillMinutesInput(topic.durationM));
    }
  }

  async createTopic(topicData: TopicTypes) {
    await this.fillBasicTopicFields(topicData);
    await this.fillAdditionalFields(topicData);
    await this.topicModal.clickSubmitBtn();
  }

  async validateFirstTopicCardName(topicName: string) {
    await this.firstTopicCardName.shouldHaveText(topicName);
  }

  async clickToFirstTopicCardInList() {
    await this.firstTopicCard.click();
  }
}
