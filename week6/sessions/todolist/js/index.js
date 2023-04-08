import Todo from './Todo.js';
import Star from './Star/Star.js';
const input = document.querySelector('input');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    new Todo(input.value);
    input.value = '';
  }
});
for (let x = 0; x < 150; x++) {
  new Star();
}
