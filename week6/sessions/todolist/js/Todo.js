import Button from './DOM/Button.js';
import Div from './DOM/Div.js';
import Input from './DOM/Input.js';
export default class Todo {
  constructor(inputTodo) {
    this.line = new Div('', 'flex').node;
    const button = new Button('x');
    const checkBox = new Input('checkbox');
    const innerDiv = new Div(inputTodo, 'todo');

    button.addEvent('click', () => {
      document.body.removeChild(this.line);
    });

    checkBox.addEvent('click', () => {
      innerDiv.node.classList.toggle('complete');
    });

    this.line.appendChild(checkBox.node);
    this.line.appendChild(innerDiv.node);
    this.line.appendChild(button.node);

    document.body.appendChild(this.line);
  }
}
