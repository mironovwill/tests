import { Component } from './Component';

export class ListItem extends Component {
  get typeOf(): string {
    return 'list item';
  }
}
