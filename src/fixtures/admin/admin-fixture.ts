import { Fixtures } from '@playwright/test';
import { AdminLoginPage } from '../../pages/admin/admin-login-page';
import { AdminTopicsPage } from '../../pages/admin/admin-topics-page';
import { AdminUsersPage } from '../../pages/admin/admin-users';
import { ContextPagesFixture } from '../context/context-pages';
import { AdminTopicPage } from '../../pages/admin/admin-topic-page';

export type AdminPagesFixture = {
  adminLoginPage: AdminLoginPage;
  adminTopicsPage: AdminTopicsPage;
  adminTopicPage: AdminTopicPage;
  adminUsersPage: AdminUsersPage;
};

export const adminPagesFixture: Fixtures<AdminPagesFixture, ContextPagesFixture> = {
  adminLoginPage: async ({ contextPage }, use) => {
    const adminLoginPage = new AdminLoginPage(contextPage);

    await use(adminLoginPage);
  },
  adminTopicsPage: async ({ contextPage }, use) => {
    const adminTopicsPage = new AdminTopicsPage(contextPage);

    await use(adminTopicsPage);
  },
  adminTopicPage: async ({ contextPage }, use) => {
    const adminTopicPage = new AdminTopicPage(contextPage);

    await use(adminTopicPage);
  },
  adminUsersPage: async ({ contextPage }, use) => {
    const adminUsersPage = new AdminUsersPage(contextPage);

    await use(adminUsersPage);
  },
};
