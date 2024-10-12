import { Topic } from './Topic';

export interface Application extends Topic {
  links?: string[];
  file?: string;
  coast?: string;
  durationH?: string;
  durationM?: string;
}
