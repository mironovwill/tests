import { test as base } from '@playwright/test';
import { ContextPagesFixture, contextPagesFixture } from '../context/context-pages';
import { AdminPagesFixture, adminPagesFixture } from './admin-fixture';
import { combineFixtures } from '../../utils/fixtures';

export const adminDashboardSetup = base.extend<ContextPagesFixture, AdminPagesFixture>(
  combineFixtures(contextPagesFixture, adminPagesFixture)
);
