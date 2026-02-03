const list = document.getElementById("ft_list");
const btn = document.getElementById("new");

loadTodos();

btn.addEventListener("click", () => {
  const text = prompt("New TO DO:");
  if (text && text.trim() !== "") {
    addTodo(text);
    saveTodos();
  }
});

function addTodo(text) {
  const div = document.createElement("div");
  div.textContent = text;

  div.addEventListener("click", () => {
    if (confirm("Do you want to remove this TO DO?")) {
      div.remove();
      saveTodos();
    }
  });

  list.prepend(div);
}

function saveTodos() {
  const todos = [];
  list.querySelectorAll("div").forEach(div => {
    todos.push(div.textContent);
  });
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function loadTodos() {
  const cookie = document.cookie
    .split("; ")
    .find(row => row.startsWith("todos="));

  if (!cookie) return;

  const todos = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
  todos.reverse().forEach(todo => addTodo(todo));
}
