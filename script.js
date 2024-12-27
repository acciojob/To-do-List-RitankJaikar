// Get references to the input field, button, and todo list
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// Function to add a new todo item
function addTodo() {
  const todoText = newTodoInput.value.trim(); // Get the input text and remove extra spaces

  // Validate the input: Do not allow empty strings
  if (todoText === "") {
    alert("Please enter a valid to-do item.");
    return; // Exit the function if input is empty
  }

  // Create a new list item (li) element
  const todoItem = document.createElement("li");
  todoItem.textContent = todoText; // Set the text content to the input value

  // Add an event listener to remove the todo item when clicked
  todoItem.addEventListener("click", function() {
    todoItem.remove(); // Remove the item when clicked
  });

  // Append the new item to the ordered list
  todoList.appendChild(todoItem);

  // Clear the input field after adding the item
  newTodoInput.value = "";
}

// Add event listener to the "Add todo" button
addTodoBtn.addEventListener("click", addTodo);

// Optional: Allow pressing "Enter" to add a todo as well
newTodoInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
