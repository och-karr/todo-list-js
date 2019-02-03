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
        return `<tr>
            <td class="todo-description">${task.description}</td>
            <td class="todo-priority">${task.priority}</td>
            <td class="is-done-checkbox">
                <label>
                    <input type="checkbox" onclick="TodoView.changeState(this, ${task.id});" 
                    ${ task.isCompleted ? 'checked' : ''}>
                </label>
            </td>
            <td><button type="submit" class="btn btn-block btn-danger" onclick="TodoView.deleteTodo(${task.id})">
                    X
                </button>
            </td>
        </tr>`
    }

    return renderer;

})(TodoRenderer || {});