import { Page } from '@playwright/test';
import { CategoryModal } from '../category-modal/CategoryModal';
import { ImageCropModal } from '../image-crop-modal/ImageCropModal';
import { Modal, Input, Checkbox, Textarea, Button, List } from '../../../page-factory';

export class TopicModal {
  private static readonly MODAL = '//form[@data-qa="addTopicModalForm"]';
  private static readonly NAME_INPUT = '//input[@data-qa="title"]';
  private static readonly TOPIC_TYPE_LIST = '//div[@data-qa="typeLabelIdSelect"]/div/span/input';
  private static readonly RESULT_LIST = '//div[@class="rc-virtual-list-holder-inner"]';
  private static readonly TAGS_INPUT = '//input[@id="tagsAutocomplete"]';
  private static readonly SKILLS_INPUT = '//input[@id="skillsAutocomplete"]';
  private static readonly AUTOCOMPLETE_RESULT_LIST = '//div[@class="rc-virtual-list-holder-inner"]';
  private static readonly EVENT_CHECKBOX = '//input[@data-qa="withEvents"]';
  private static readonly APPROVE_CHECKBOX = '//input[@data-qa="approved"]';
  private static readonly CORP_ACCESS_CHECKBOX = '//input[@data-qa="statusScope"]';
  private static readonly HAS_CERTIFICATE_CHECKBOX = '//input[@data-qa="hasCertificate"]';
  private static readonly HAS_BADGE_CHECKBOX = '//input[@data-qa="hasBadge"]';
  private static readonly DESCRIPTION_TEXTAREA = '//textarea[@data-qa="description"]';
  private static readonly LANGUAGES_LIST = '//input[@id="languageAutocomplete"]/../..';
  private static readonly LEVELS_LIST = '//input[@id="levelsSelect"]';
  private static readonly SUBMIT_BTN = '//button[@data-qa="submitButton"]';
  private static readonly CATEGORY_BTN = '//button[@data-qa="categoryBtn"]';
  private static readonly TOPIC_IMAGE_INPUT = '//input[@id="cover-img-file-input"]';
  private static readonly UPLOADED_IMAGE = '//span[@id="uploadedImage"]';
  private static readonly DELETE_IMAGE_BTN = '//span[@id="deleteImage"]';
  private static readonly AUTHOR_INPUT = '//input[@id="authorsAutocomplete"]';
  private static readonly LINK_INPUT = '//input[@id="linkInput"]';
  private static readonly COST_INPUT = '//input[@id="costInput"]';
  private static readonly YEAR_INPUT = '//input[@id="yearInput"]';
  private static readonly MINUTES_INPUT = '//input[@data-qa="minutesInput"]';
  private static readonly HOURS_INPUT = '//input[@data-qa="hoursInput"]';
  private static readonly MEET_PLACE_INPUT = '//input[@id="meetPlaceInput"]';
  private static readonly USERS_COUNT_INPUT = '//input[@id="usersCountInput"]';
  private static readonly PLATFORM_SELECT = '//input[@id="platformSelect"]';
  private static readonly COMMENT_INPUT = '//textarea[@id="commentInput"]';
  private static readonly PERIOD_INPUT = '//input[@id="periodSelect"]';
  private static readonly COMPANY_INPUT = '//input[@id="companyInput"]';
  private static readonly EXECUTIVE_ACTIVITY_INPUT = '//input[@id="executiveActivityInput"]';
  private static readonly EXECUTIVE_INDICATORS_INPUT = '//input[@id="executiveIndicatorsInput"]';
  private static readonly IN_PAPER_CHECKBOX = '//input[@name="qiwiLibrary"]';
  private static readonly CERTIFICATE_INPUT = '//div[@data-qa="certificateId"]/div';
  private static readonly CERTIFICATE_SERIES_INPUT = '//input[@data-qa="certificateSeries"]';
  private static readonly CERTIFICATE_NUMBERS_MIN_INPUT = '//input[@data-qa="certificateNumbersMin"]';
  private static readonly CERTIFICATE_NUMBERS_MAX_INPUT = '//input[@data-qa="certificateNumbersMax"]';
  private static readonly BADGE_INPUT = '//div[@data-qa="badgeId"]/div/span/input';
  private static readonly ADDRESS_BOOK_INPUT = '//input[@id="addressBookInput"]';

  readonly modal: Modal;
  readonly categoryModal: CategoryModal;
  readonly imageCropModal: ImageCropModal;
  readonly eventCheckbox: Checkbox;
  readonly approveCheckbox: Checkbox;
  readonly deleteImageBtn: Button;
  private readonly certificateInput: Input;
  private readonly addressBookResultList: List;
  private readonly addressBookInput: Input;
  private readonly certificateResultList: List;
  private readonly certificateSeriesInput: Input;
  private readonly certificateNumbersMinInput: Input;
  private readonly certificateNumbersMaxInput: Input;
  private readonly badgeInput: Input;
  private readonly nameInput: Input;
  private readonly topicTypeInput: Input;
  private readonly costInput: Input;
  private readonly yearInput: Input;
  private readonly minutesInput: Input;
  private readonly hoursInput: Input;
  private readonly linkInput: Input;
  private readonly authorInput: Input;
  private readonly authorResultList: List;
  private readonly topicTypeResultList: List;
  private readonly languagesList: List;
  private readonly languagesResultList: List;
  private readonly levelList: List;
  private readonly levelResultList: List;
  private readonly topicImageInput: Input;
  private readonly corpAccessCheckbox: Checkbox;
  private readonly hasCertificateCheckbox: Checkbox;
  private readonly hasBadgeCheckbox: Checkbox;
  private readonly descriptionTextarea: Textarea;
  private readonly submitBtn: Button;
  private readonly categoryBtn: Button;
  private readonly tagsInput: Input;
  private readonly tagsResultList: List;
  private readonly badgeResultList: List;
  private readonly skillsInput: Input;
  private readonly skillsResultList: List;
  private readonly companyInput: Input;
  private readonly inPaperCheckbox: Checkbox;

  constructor(public page: Page) {
    this.categoryModal = new CategoryModal(page);
    this.imageCropModal = new ImageCropModal(page);

    this.modal = new Modal({
      page,
      locator: TopicModal.MODAL,
      name: 'Окно добавления материала',
    });

    this.nameInput = new Input({
      page,
      locator: TopicModal.NAME_INPUT,
      name: 'Название',
    });

    this.topicTypeInput = new Input({
      page,
      locator: TopicModal.TOPIC_TYPE_LIST,
      name: 'Тип топика',
    });

    this.topicTypeResultList = new List({
      page,
      locator: TopicModal.RESULT_LIST,
      name: 'Список топиков',
    });

    this.topicImageInput = new Input({
      page,
      locator: TopicModal.TOPIC_IMAGE_INPUT,
      name: 'Обложка',
    });

    this.eventCheckbox = new Checkbox({
      page,
      locator: TopicModal.EVENT_CHECKBOX,
      name: 'События',
    });

    this.approveCheckbox = new Checkbox({
      page,
      locator: TopicModal.APPROVE_CHECKBOX,
      name: 'Согласование',
    });

    this.corpAccessCheckbox = new Checkbox({
      page,
      locator: TopicModal.CORP_ACCESS_CHECKBOX,
      name: 'Корпоративный доступ',
    });

    this.hasCertificateCheckbox = new Checkbox({
      page,
      locator: TopicModal.HAS_CERTIFICATE_CHECKBOX,
      name: 'Есть сертификат',
    });

    this.hasBadgeCheckbox = new Checkbox({
      page,
      locator: TopicModal.HAS_BADGE_CHECKBOX,
      name: 'Награда',
    });

    this.descriptionTextarea = new Textarea({
      page,
      locator: TopicModal.DESCRIPTION_TEXTAREA,
      name: 'Описание',
    });

    this.categoryBtn = new Button({
      page,
      locator: TopicModal.CATEGORY_BTN,
      name: 'Категория',
    });

    this.deleteImageBtn = new Button({
      page,
      locator: TopicModal.DELETE_IMAGE_BTN,
      name: 'Удалить обложку',
    });

    this.submitBtn = new Button({
      page,
      locator: TopicModal.SUBMIT_BTN,
      name: 'Добавить материал',
    });

    this.languagesList = new List({
      page,
      locator: TopicModal.LANGUAGES_LIST,
      name: 'Язык',
    });

    this.languagesResultList = new List({
      page,
      locator: TopicModal.RESULT_LIST,
      name: 'Языки',
    });

    this.levelList = new List({
      page,
      locator: TopicModal.LEVELS_LIST,
      name: 'Уровень',
    });

    this.levelResultList = new List({
      page,
      locator: TopicModal.RESULT_LIST,
      name: 'Уровни',
    });

    this.certificateResultList = new List({
      page,
      locator: TopicModal.RESULT_LIST,
      name: 'Сертификаты',
    });

    this.badgeResultList = new List({
      page,
      locator: TopicModal.RESULT_LIST,
      name: 'Награды',
    });

    this.tagsInput = new Input({
      page,
      locator: TopicModal.TAGS_INPUT,
      name: 'Теги',
    });

    this.tagsResultList = new List({
      page,
      locator: TopicModal.AUTOCOMPLETE_RESULT_LIST,
      name: 'Теги',
    });

    this.skillsInput = new Input({
      page,
      locator: TopicModal.SKILLS_INPUT,
      name: 'Навыки',
    });

    this.costInput = new Input({
      page,
      locator: TopicModal.COST_INPUT,
      name: 'Стоимость',
    });

    this.yearInput = new Input({
      page,
      locator: TopicModal.YEAR_INPUT,
      name: 'Год',
    });

    this.hoursInput = new Input({
      page,
      locator: TopicModal.HOURS_INPUT,
      name: 'Часы',
    });

    this.minutesInput = new Input({
      page,
      locator: TopicModal.MINUTES_INPUT,
      name: 'Минуты',
    });

    this.linkInput = new Input({
      page,
      locator: TopicModal.LINK_INPUT,
      name: 'Ссылки',
    });

    this.authorInput = new Input({
      page,
      locator: TopicModal.AUTHOR_INPUT,
      name: 'Автор/Спикер',
    });

    this.companyInput = new Input({
      page,
      locator: TopicModal.COMPANY_INPUT,
      name: 'Компания',
    });

    this.skillsResultList = new List({
      page,
      locator: TopicModal.AUTOCOMPLETE_RESULT_LIST,
      name: 'Навыки',
    });

    this.authorResultList = new List({
      page,
      locator: TopicModal.AUTOCOMPLETE_RESULT_LIST,
      name: 'Авторы',
    });

    this.inPaperCheckbox = new Checkbox({
      page,
      locator: TopicModal.IN_PAPER_CHECKBOX,
      name: 'В бумажном виде',
    });

    this.certificateInput = new Input({
      page,
      locator: TopicModal.CERTIFICATE_INPUT,
      name: 'Выбрать шаблон',
    });

    this.addressBookInput = new Input({
      page,
      locator: TopicModal.ADDRESS_BOOK_INPUT,
      name: 'Адрес',
    });

    this.addressBookResultList = new List({
      page,
      locator: TopicModal.AUTOCOMPLETE_RESULT_LIST,
      name: 'Адреса',
    });

    this.certificateSeriesInput = new Input({
      page,
      locator: TopicModal.CERTIFICATE_SERIES_INPUT,
      name: 'Серия',
    });

    this.certificateNumbersMinInput = new Input({
      page,
      locator: TopicModal.CERTIFICATE_NUMBERS_MIN_INPUT,
      name: 'Начальный',
    });

    this.certificateNumbersMaxInput = new Input({
      page,
      locator: TopicModal.CERTIFICATE_NUMBERS_MAX_INPUT,
      name: 'Конечный',
    });

    this.badgeInput = new Input({
      page,
      locator: TopicModal.BADGE_INPUT,
      name: 'Присвоить награду',
    });
  }

  async uploadImage(file: string) {
    await this.topicImageInput.uploadFile(file);
    await this.imageCropModal.checkModalIsOpened();
    await this.imageCropModal.clickSubmitBtn();
  }

  async fillTopicName(value: string) {
    await this.nameInput.fill(value, { shouldHaveValue: true });
  }

  async fillDescription(value: string) {
    await this.descriptionTextarea.fill(value, { validateValue: true });
  }

  async selectTopicType(topicName: string) {
    await this.topicTypeInput.click();
    await this.topicTypeResultList.selectListItem('role', topicName, 'option');
  }

  async selectLevel(levelName: string) {
    await this.levelList.click();
    await this.levelResultList.selectListItem('role', levelName, 'option');
  }

  async selectLanguage(language: string) {
    await this.languagesList.click();
    await this.languagesResultList.selectListItem('role', language, 'option');
  }

  async checkEventCheckbox() {
    await this.eventCheckbox.check();
  }

  async checkApproveCheckbox() {
    await this.approveCheckbox.check();
  }

  async checkCorpAccessCheckbox() {
    await this.corpAccessCheckbox.check();
  }

  async checkBadgeCheckbox() {
    await this.hasBadgeCheckbox.check();
  }

  async checkHasCertificateCheckbox() {
    await this.hasCertificateCheckbox.check();
  }

  async fillTags(tags: string[]) {
    for (const tag of tags) {
      await this.tagsInput.fill(tag, { validateValue: true });
      await this.tagsResultList.selectListItem('text', tag, 'option');
    }
  }

  async fillSkills(skills: string[]) {
    for (const skill of skills) {
      await this.skillsInput.fill(skill, { validateValue: true });
      await this.skillsResultList.selectListItem('text', skill, 'option');
    }
  }

  async fillLinkInput(links: string[]) {
    for (const link of links) {
      await this.linkInput.fill(link, { validateValue: true });
      await this.page.keyboard.press('Enter');
    }
  }

  async fillCostInput(cost: string) {
    await this.costInput.fill(cost, { validateValue: true });
  }

  async fillMinutesInput(minutes: string) {
    await this.minutesInput.fill(minutes, { validateValue: true });
  }

  async fillYearInput(year: string) {
    await this.yearInput.fill(year, { validateValue: true });
  }

  async fillHoursInput(hours: string) {
    await this.hoursInput.fill(hours, { validateValue: true });
  }

  async fillCompanyInput(company: string) {
    await this.companyInput.fill(company, { validateValue: true });
  }

  async fillCertificateSeriesInput(certificateSeries: string) {
    await this.certificateSeriesInput.fill(certificateSeries, { validateValue: true });
  }

  async fillCertificateNumbersMinInput(certificateNumbersMin: string) {
    await this.certificateNumbersMinInput.fill(certificateNumbersMin, { validateValue: true });
  }

  async fillCertificateNumbersMaxInput(certificateNumbersMax: string) {
    await this.certificateNumbersMaxInput.fill(certificateNumbersMax, { validateValue: true });
  }

  async checkInPaperCheckbox() {
    await this.inPaperCheckbox.check();
  }

  async selectCertificate(certificateName: string) {
    await this.certificateInput.click();
    await this.certificateResultList.selectListItem('title', certificateName);
  }

  async selectBadge(badgeName: string) {
    await this.badgeInput.click();
    await this.badgeResultList.selectListItem('title', badgeName);
  }

  async fillAddressBookInput(address: string) {
    await this.addressBookInput.fill(address, { validateValue: true });
    await this.addressBookResultList.selectListItem('name', address, 'option');
  }

  async fillAuthorInput(authors: string[]) {
    for (const author of authors) {
      await this.authorInput.fill(author, { validateValue: true });
      await this.authorResultList.selectListItem('name', author, 'option');
    }
  }

  async clickDeleteImageBtn() {
    await this.deleteImageBtn.click();
  }

  async clickCategoryBtn() {
    await this.categoryBtn.click();
  }

  async clickSubmitBtn() {
    await this.submitBtn.click();
  }
}
