import { Topic } from './Topic';

export interface BookTopic extends Topic {
  file?: string;
  links?: string[];
  authors?: string[];
  creator?: string[];
  paper?: boolean;
  addressBook?: string;
  coast?: string;
  year?: string;
  durationH?: string;
  durationM?: string;
  company?: string;
}
