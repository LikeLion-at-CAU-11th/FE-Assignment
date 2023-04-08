import DOM from './DOM.js';

export default class Input extends DOM {
  constructor(inputType) {
    super('input', '');
    this.node.type = inputType;
  }
}
