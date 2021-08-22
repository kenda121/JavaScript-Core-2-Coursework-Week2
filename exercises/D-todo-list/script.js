function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let newul = document.createElement("ul");
  content.appendChild(newul);

  todos.forEach(addtodo);
}
function addtodo(todo) {
  let newul = document.querySelector("ul");
  let newli = document.createElement("li");
  newli.innerText = todo.todo;
  newul.appendChild(newli);
  newli.addEventListener("click", makeline);
  function makeline() {
    if (newli.style.textDecoration === "none") {
      newli.style.textDecoration = "line-through";
    } else {
      newli.style.textDecoration = "none";
    }
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
