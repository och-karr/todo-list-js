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
        return `<tr class="task-row">
            <td class="cell todo-description">${task.description}</td>
            <td class="cell todo-priority">${task.priority}</td>
            <td class="cell is-checked-checkbox">
                <label>
                    <input type="checkbox" onclick="TodoView.isChecked(this, ${task.id});" 
                    ${ task.isCompleted ? 'checked' : ''}>
                </label>
            </td>
            <td class="cell"><div class="trash-container"><i class="fas fa-trash-alt trash-visible" onclick="TodoView.deleteTodo(${task.id})"></i></div>
            </td>
        </tr>`
    }

    return renderer;

})(TodoRenderer || {});