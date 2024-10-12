import { Topic } from './Topic';

export interface Test extends Topic {
  links?: string[];
  file?: string;
  authors?: string[];
  year?: string;
  durationH?: string;
  durationM?: string;
}
