// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import { action } from '@ember/object';
import stripIndent from 'strip-indent';

export default class CodeComponent extends Component {
  tagName = '';
  code = '';

  @action
  extractCode(element) {
    this.code = this.code !== '' ? this.code : stripIndent(element.innerText);
  }
}
