const storedData = localStorage.getItem('todoList');
let todoList =  storedData ? JSON.parse(storedData) : [];

renderTodoList();

function addTodoList() {
  const inputElement = document.querySelector('.js-todo-input');
  const dueDateElement = document.querySelector('.js-date-input');
  const name = inputElement.value;
  const dueDate = dueDateElement.value;
  const todoObject = {name, dueDate}
  todoList.push(todoObject);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  console.log(todoList);
  renderTodoList();
  inputElement.value = '';
}

function renderTodoList() {
  let accumulatorTodo = '';
  for( let i=0; i<todoList.length; i++) {
    accumulatorTodo += `
      <div class="js-todo-grid">
        <p>${todoList[i].name}</p>
        <p>${todoList[i].dueDate}</p>
        <button class="js-delete-button" onclick=deleteTodo();>Delete</button>
      </div>
    `;
  }
  document.querySelector('.js-todo-list')
  .innerHTML = accumulatorTodo;
}

function deleteTodo(i) {
  todoList.pop(i, 0);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderTodoList();
}
