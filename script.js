let todoItems = [];

//Adding To do function
function addToDoItem(text) {
  const newTodo = {
    id: todoItems.length,
    text: text,
    completed: false, 
  };
  todoItems.push(newTodo);
}

//Removing To do function 
function removeToDoItem(todoId) {
  todoItems = todoItems.filter(todo => todo.id !==todoId);
}

//Marking task as complete function 
function markToDoItemAsCompleted(todoId) {
  const index = todoItems.findIndex(todo => todo.id ===todoId);
  if (index !== -1) {
    todoItems[index].completed = true;
  }
}

//Deleting task from Array Function
function deleteToDoItem(todoId) {
  todoItems = todoItems.filter(todo => todo.id !== todoId); 
}

//Clearing All Completed Tasks Function
function clearCompletedTasks() {
  todoItems = todoItems.filter(todo => !todo.completed);
}

