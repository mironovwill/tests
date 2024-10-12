import { Page } from '@playwright/test';
import { List, ListItem } from '../../../page-factory';
export class Menu {
  private static readonly ACCESS_MENU_ITEM = '//a[@href="/access"]';
  private static readonly TOPICS_MENU_ITEM = '//a[@href="/topic-modal"]';
  private static readonly QUESTION_BANK_MENU_ITEM = '//a[@href="/question-bank"]';
  private static readonly COMPILATIONS_MENU_ITEM = '//a[@href="/compilations"]';
  private static readonly ACCESS_VAR_DIRECTORY_MENU_ITEM = '//a[@href="/var-directory"]';
  private static readonly TRACKS_MENU_ITEM = '//a[@href="/tracks"]';
  private static readonly NEWS_MENU_ITEM = '//a[@href="/news"]';
  private static readonly MANAGE_COURSE_MENU_ITEM = '//a[@href="/manage-course"]';
  private static readonly EVENTS_MENU_ITEM = '//a[@href="/events"]';
  private static readonly D360_MENU_ITEM = '//a[@href="/d360"]';
  private static readonly USERS_MENU_ITEM = '//a[@href="/users"]';
  private static readonly PROFILE_SETTINGS_MENU_ITEM = '//a[@href="/profile-setting"]';
  private static readonly BADGE_MENU_ITEM = '//a[@href="/badge"]';
  private static readonly TAG_DIRECTORY_ITEM = '//a[@href="/tag-directory"]';
  private static readonly SKILLS_DIRECTORY_ITEM = '//a[@href="/tag-directory"]';
  private static readonly COMPETENCE_DIRECTORY_ITEM = '//a[@href="/tag-directory"]';
  private static readonly AUTHORS_DIRECTORY_ITEM = '//a[@href="/authors-directory"]';
  private static readonly POST_DIRECTORY_ITEM = '//a[@href="/post-directory"]';
  private static readonly DEPARTMENT_DIRECTORY_ITEM = '//a[@href="/department-directory"]';
  private static readonly FUNCTION_DIRECTORY_ITEM = '//a[@href="/function-directory"]';
  private static readonly MAILS_NOTIFICATIONS_ITEM = '//a[@href="/notifications"]';
  private static readonly MAILS_MAILING_ITEM = '//a[@href="/mailing"]';
  private static readonly LOGGING_ITEM = '//a[@href="/logging"]';
  private static readonly LOGGING_ADMIN_ITEM = '//a[@href="/logging-admin"]';
  private static readonly MENTORS_ITEM = '//a[@href="/mentors"]';
  private static readonly MENTEE_ITEM = '//a[@href="/mentee"]';
  private static readonly PRODUCTS_ITEM = '//a[@href="/products"]';
  private static readonly ORDERS_ITEM = '//a[@href="/orders"]';
  private static readonly MENU_LIST = '//ul[@role="menu"]';

  private readonly menuList: List;
  readonly accessMenuItem: ListItem;
  readonly varDirectoryMenuItem: ListItem;
  readonly topicsMenuItem: ListItem;
  readonly questionBankMenuItem: ListItem;
  readonly compilationsMenuItem: ListItem;
  readonly tracksMenuItem: ListItem;
  readonly newsMenuItem: ListItem;
  readonly manageCourseMenuItem: ListItem;
  readonly eventsMenuItem: ListItem;
  readonly d360MenuItem: ListItem;
  readonly usersMenuItem: ListItem;
  readonly profileSettingsMenuItem: ListItem;
  readonly badgeMenuItem: ListItem;
  readonly tagDirectoryMenuItem: ListItem;
  readonly skillsDirectoryMenuItem: ListItem;
  readonly competenceDirectoryMenuItem: ListItem;
  readonly authorsDirectoryMenuItem: ListItem;
  readonly postDirectoryMenuItem: ListItem;
  readonly departmentDirectoryMenuItem: ListItem;
  readonly functionDirectoryMenuItem: ListItem;
  readonly mailsNotificationsMenuItem: ListItem;
  readonly mailsMailingMenuItem: ListItem;
  readonly loggingMenuItem: ListItem;
  readonly loggingAdminMenuItem: ListItem;
  readonly mentorsMenuItem: ListItem;
  readonly menteeMenuItem: ListItem;
  readonly productsMenuItem: ListItem;
  readonly ordersMenuItem: ListItem;

  constructor(public page: Page) {
    this.menuList = new List({
      page,
      locator: Menu.MENU_LIST,
      name: 'Блок меню',
    });

    this.accessMenuItem = new ListItem({
      page,
      locator: Menu.ACCESS_MENU_ITEM,
      name: 'Настройки доступа',
    });

    this.varDirectoryMenuItem = new ListItem({
      page,
      locator: Menu.ACCESS_VAR_DIRECTORY_MENU_ITEM,
      name: 'Настройки системы',
    });

    this.topicsMenuItem = new ListItem({
      page,
      locator: Menu.TOPICS_MENU_ITEM,
      name: 'Материалы',
    });

    this.questionBankMenuItem = new ListItem({
      page,
      locator: Menu.QUESTION_BANK_MENU_ITEM,
      name: 'Банк вопросов',
    });

    this.compilationsMenuItem = new ListItem({
      page,
      locator: Menu.COMPILATIONS_MENU_ITEM,
      name: 'Подборки',
    });

    this.tracksMenuItem = new ListItem({
      page,
      locator: Menu.TRACKS_MENU_ITEM,
      name: 'Треки',
    });

    this.newsMenuItem = new ListItem({
      page,
      locator: Menu.NEWS_MENU_ITEM,
      name: 'Новости',
    });

    this.manageCourseMenuItem = new ListItem({
      page,
      locator: Menu.MANAGE_COURSE_MENU_ITEM,
      name: 'Согласование заявок',
    });

    this.eventsMenuItem = new ListItem({
      page,
      locator: Menu.EVENTS_MENU_ITEM,
      name: 'Календарь мероприятий',
    });

    this.d360MenuItem = new ListItem({
      page,
      locator: Menu.D360_MENU_ITEM,
      name: '360',
    });

    this.usersMenuItem = new ListItem({
      page,
      locator: Menu.USERS_MENU_ITEM,
      name: 'Сотрудники',
    });

    this.profileSettingsMenuItem = new ListItem({
      page,
      locator: Menu.PROFILE_SETTINGS_MENU_ITEM,
      name: 'Настройки профиля',
    });

    this.badgeMenuItem = new ListItem({
      page,
      locator: Menu.BADGE_MENU_ITEM,
      name: 'Награды',
    });

    this.tagDirectoryMenuItem = new ListItem({
      page,
      locator: Menu.TAG_DIRECTORY_ITEM,
      name: 'Теги',
    });

    this.skillsDirectoryMenuItem = new ListItem({
      page,
      locator: Menu.SKILLS_DIRECTORY_ITEM,
      name: 'Навыки',
    });

    this.competenceDirectoryMenuItem = new ListItem({
      page,
      locator: Menu.COMPETENCE_DIRECTORY_ITEM,
      name: 'Компетенции',
    });

    this.authorsDirectoryMenuItem = new ListItem({
      page,
      locator: Menu.AUTHORS_DIRECTORY_ITEM,
      name: 'Авторы',
    });

    this.postDirectoryMenuItem = new ListItem({
      page,
      locator: Menu.POST_DIRECTORY_ITEM,
      name: 'Специализации',
    });

    this.departmentDirectoryMenuItem = new ListItem({
      page,
      locator: Menu.DEPARTMENT_DIRECTORY_ITEM,
      name: 'Отделы',
    });

    this.functionDirectoryMenuItem = new ListItem({
      page,
      locator: Menu.FUNCTION_DIRECTORY_ITEM,
      name: 'Должности',
    });

    this.mailsNotificationsMenuItem = new ListItem({
      page,
      locator: Menu.MAILS_NOTIFICATIONS_ITEM,
      name: 'Список отправленных сообщений',
    });

    this.mailsMailingMenuItem = new ListItem({
      page,
      locator: Menu.MAILS_MAILING_ITEM,
      name: 'Настройка рассылок',
    });

    this.loggingMenuItem = new ListItem({
      page,
      locator: Menu.LOGGING_ITEM,
      name: 'Статистика обучения',
    });

    this.loggingAdminMenuItem = new ListItem({
      page,
      locator: Menu.LOGGING_ADMIN_ITEM,
      name: 'Логирование действий с настройками',
    });

    this.mentorsMenuItem = new ListItem({
      page,
      locator: Menu.MENTORS_ITEM,
      name: 'Менторы',
    });

    this.menteeMenuItem = new ListItem({
      page,
      locator: Menu.MENTEE_ITEM,
      name: 'Заявки',
    });

    this.productsMenuItem = new ListItem({
      page,
      locator: Menu.PRODUCTS_ITEM,
      name: 'Товары',
    });

    this.ordersMenuItem = new ListItem({
      page,
      locator: Menu.ORDERS_ITEM,
      name: 'Заказы',
    });
  }

  async verifyAdminHasNoLinksInMenu() {
    await this.menuList.checkCount(18);
    await this.accessMenuItem.shouldBeNotVisible();
    await this.varDirectoryMenuItem.shouldBeNotVisible();
  }

  async verifyManagerHasNoLinksInMenu() {
    await this.menuList.checkCount(8);
    await this.accessMenuItem.shouldBeNotVisible();
    await this.varDirectoryMenuItem.shouldBeNotVisible();
  }

  async openDirectoriesList() {
    await this.menuList.selectListItem('role', 'Справочники', 'menuitem');
  }

  async openMailsSettingsList() {
    await this.menuList.selectListItem('role', 'message Настройка рассылок', 'menuitem');
  }

  async openMentorsList() {
    await this.menuList.selectListItem('role', 'Менторство', 'menuitem');
  }

  async openShopList() {
    await this.menuList.selectListItem('role', 'Магазин', 'menuitem');
  }

  async openLearningStatisticList() {
    await this.menuList.selectListItem('role', 'Статистика обучения', 'menuitem');
  }
}
