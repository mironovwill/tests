import { TopicType } from '../enums/TopicType';
import { TopicLevels } from '../enums/TopicLevels';
import { TopicsLanguages } from '../enums/TopicsLanuages';
import { TopicCategories } from '../enums/TopicCategories';

export interface Topic {
  topicName: string;
  topicType: TopicType;
  categories: TopicCategories[];
  eventCheckbox?: boolean;
  approveCheckbox?: boolean;
  description: string;
  image?: string;
  tags?: string[];
  skills?: string[];
  language: TopicsLanguages;
  level: TopicLevels;
  corpAccessCheckbox?: boolean;
  badgeCheckbox?: boolean;
  hasCertificateCheckbox?: boolean;
  certificateName?: string;
  certificateSeries?: string;
  certificateNumbersMin?: string;
  certificateNumbersMax?: string;
  badgeName?: string;
}
