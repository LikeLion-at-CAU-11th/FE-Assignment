export default class DOM {
  constructor(tagType, inputText) {
    this.node = document.createElement(tagType);
    this.node.innerText = inputText;
  }
  addEvent(eventType, callbackFunction) {
    this.node.addEventListener(eventType, callbackFunction);
  }
}
