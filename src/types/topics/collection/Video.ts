import { Topic } from './Topic';

export interface Video extends Topic {
  file?: string;
  links?: string[];
  authors?: string[];
  company?: string;
  durationH?: string;
  durationM?: string;
}
