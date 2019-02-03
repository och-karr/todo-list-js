var TodoRenderer = (function (renderer) {

    var todoListRoot = null;

    renderer.renderList = function (tasks) {
        createListRoot();

        for (var i = 0; i < tasks.length; i++) {
            createTaskElement(tasks[i]);
        }
    };

    function createListRoot() {
        if (!todoListRoot) {
            todoListRoot = document.getElementById('todo-list-root');
        } else {
            clearListRoot();
        }
    }

    function clearListRoot() {
        while (todoListRoot.firstChild) {
            todoListRoot.removeChild(todoListRoot.firstChild);
        }
    }

    function createTaskElement(task) {
        todoListRoot.innerHTML += createTemplateTaskElement(task);
    }

    function createTemplateTaskElement(task) {
        return '<p>' + task.description + '</p>' + '<p>' + task.priority + '</p>';
    }

    return renderer;

})(TodoRenderer || {});