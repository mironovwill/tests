import { Component } from './Component';

export class Text extends Component {
  get typeOf(): string {
    return 'text';
  }
}
