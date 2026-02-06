$(document).ready(function () {
  loadTodos();

  $("#new").click(function () {
    const text = prompt("New TO DO:");
    if (text && text.trim() !== "") {
      addTodo(text);
      saveTodos();
    }
  });
});

function addTodo(text) {
  const $div = $("<div></div>").text(text);

  $div.click(function () {
    if (confirm("Do you want to remove this TO DO?")) {
      $(this).remove();
      saveTodos();
    }
  });

  $("#ft_list").prepend($div);
}

function saveTodos() {
  const todos = [];

  $("#ft_list div").each(function () {
    todos.push($(this).text());
  });

  document.cookie =
    "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function loadTodos() {
  const cookie = document.cookie
    .split("; ")
    .find(row => row.startsWith("todos="));

  if (!cookie) return;

  const todos = JSON.parse(
    decodeURIComponent(cookie.split("=")[1])
  );

  todos.reverse().forEach(todo => addTodo(todo));
}
