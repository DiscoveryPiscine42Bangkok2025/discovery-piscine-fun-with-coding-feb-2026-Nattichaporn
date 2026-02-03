$(document).ready(function () {

    function setCookie(todoList) {
        document.cookie = "todo=" + encodeURIComponent(JSON.stringify(todoList)) + "; path=/";
    }

    function getCookie() {
        let cookies = document.cookie.split('; ');
        for (let i = 0; i < cookies.length; i++) {
            let parts = cookies[i].split('=');
            if (parts[0] === "todo")
                return JSON.parse(decodeURIComponent(parts[1]));
        }
        return [];
    }

    function addTodo(text) {
        let div = $("<div></div>").text(text);

        div.click(function () {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });

        $("#ft_list").prepend(div);
        saveTodos();
    }

    function saveTodos() {
        let todos = [];
        $("#ft_list div").each(function () {
            todos.push($(this).text());
        });
        setCookie(todos);
    }

    $("#new").click(function () {
        let todo = prompt("New TO DO:");
        if (todo && todo.trim() !== "")
            addTodo(todo);
    });

    // Load from cookie
    let todos = getCookie();
    for (let i = 0; i < todos.length; i++) {
        addTodo(todos[i]);
    }
});
