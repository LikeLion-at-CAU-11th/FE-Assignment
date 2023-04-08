import DOM from './DOM.js';

export default class Button extends DOM {
  constructor(inputText) {
    super('button', inputText);
  }
}
