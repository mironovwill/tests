import { Topic } from './Topic';

export interface Podcast extends Topic {
  links?: string[];
  file?: string;
  authors?: string[];
  company?: string;
  durationH: string;
  durationM: string;
}
