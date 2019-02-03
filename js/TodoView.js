var TodoView = (function (view) {

    var addTodoInput = document.getElementById('todo-input');
    var addTodoSelect = document.getElementById('select-priority');

    view.getTodos = function () {
        return TodoService.getTasks();
    }

    view.addTodo = function () {
        TodoService.addTask(addTodoInput.value, addTodoSelect.value);
        addTodoInput.value = '';

        updateView();
    };

    view.deleteTodo = function (todoId) {
        TodoService.deleteTask(todoId);

        updateView();
    };

    view.isChecked = function (checkbox, todoId) {
        TodoService.isDone(checkbox.checked, todoId);

        updateView();
    };


    function updateView() {
        TodoRenderer.renderList(TodoService.getTasks());
    }

    return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function (event) {
    TodoRenderer.renderList(TodoView.getTodos());
});