var TodoView = (function (view) {

    var addTodoInput = document.getElementById('todo-input');
    var addTodoSelect = document.getElementById('select-priority');

    view.getTodos = function () {
        return TodoService.getTasks();
    };

    view.addTodo = function () {
        TodoService.addTask(addTodoInput.value, addTodoSelect.value);
        addTodoInput.value = '';

        updateView(TodoService.getTasks());
    };

    view.deleteTodo = function (todoId) {
        TodoService.deleteTask(todoId);

        updateView(TodoService.getTasks());
    };

    view.isChecked = function (checkbox, todoId) {
        TodoService.isDone(checkbox.checked, todoId);

        updateView(TodoService.getTasks());
    };

    view.sortByName = function() {
        var sortedTable = sortTableByName(TodoService.getTasks());
        updateView(sortedTable);
    };

    view.sortByPriority = function() {
        var sortedTable = sortTableByPriority(TodoService.getTasks());
        updateView(sortedTable);
    };

    view.sortByDone = function() {
        var sortedTable = sortTableByDone(TodoService.getTasks());
        updateView(sortedTable);
    };

    function updateView(tasks) {
        UpdateLocalStorage.saveTaskInLocalStorage(tasks);
        TodoRenderer.renderList(tasks);
    }

    return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function (event) {
    TodoService.updateTasks();
    TodoRenderer.renderList(TodoView.getTodos());
});