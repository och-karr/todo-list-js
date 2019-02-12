var TodoView = (function (view) {

    var addTodoInput = document.getElementById('todo-input');
    var addTodoSelect = document.getElementById('select-priority');
    var pageSize = document.getElementById('page-size');
    var sumTaskRows = document.getElementById('sum-task-rows');
    var fromTaskRows = document.getElementById('from-task-rows');
    var toTaskRows = document.getElementById('to-task-rows');
    var pageNumber = 1;

    // MAIN FUNCTIONS

    view.getTodos = function () {
        return TodoService.getTasks();
    };

    view.addTodo = function () {
        if (addTodoInput.value !== "") {
            TodoService.addTask(addTodoInput.value, addTodoSelect.value);
            addTodoInput.value = '';

            updateView(TodoService.getTasks());
            view.showSlicedTableAfterSizeChange();
        } else {
            alert("empty");
        }
    };

    view.deleteTodo = function (todoId) {
        TodoService.deleteTask(todoId);

        updateView(TodoService.getTasks());
        view.showSlicedTableAfterSizeChange();
    };

    view.isChecked = function (checkbox, todoId) {
        TodoService.isDone(checkbox.checked, todoId);

        updateView(TodoService.getTasks());
        view.showSlicedTableAfterSizeChange();
    };

    // SORTING FUNCTIONS

    view.sortByName = function () {
        sortTableByName(TodoService.getTasks());
        view.showSlicedTableAfterSizeChange();
    };

    //IT DOES NOT WORK
    view.sortByPriority = function () {
        sortTableByPriority(TodoService.getTasks());
        view.showSlicedTableAfterSizeChange();
    };

    //WORKS BUT TABLE IS NOT SLICED
    // view.sortByPriority = function () {
    //     sortedTable = sortTableByPriority(TodoService.getTasks());
    //     updateView(sortedTable);
    // };

    view.sortByDone = function () {
        sortTableByDone(TodoService.getTasks());
        view.showSlicedTableAfterSizeChange();
    };

    // FUNCTIONS FOR PAGINATION

    view.showPrev = function () {
        if (pageNumber > 1) {
            pageNumber--;
        }

        view.showSlicedTable(pageNumber);
    }

    view.showNext = function () {
        if (pageNumber < Math.ceil(TodoService.getTasks().length / pageSize.value)) {
            pageNumber++;
        }

        view.showSlicedTable(pageNumber);
    }

    view.showSlicedTableAfterSizeChange = function () {

        pageNum = 1;
        updatePaginatedView(TodoService.getPaginatedTasks(pageSize.value, pageNum));
        view.updateTasksRange(pageSize.value, pageNum);
    }

    view.showSlicedTable = function (pageNum) {

        updatePaginatedView(TodoService.getPaginatedTasks(pageSize.value, pageNum));
        view.updateTasksRange(pageSize.value, pageNum);
    }

    view.updateTasksSum = function (allTasks) {
        sumTaskRows.innerHTML = allTasks.length;
    }

    view.updateTasksRange = function (tableSize, tableNumber) {

        var tasks = TodoService.getTasks();

        var from = ((tableNumber - 1) * tableSize) + 1;
        var to = tableNumber * tableSize;

        if (tasks.length < to) {
            to = tasks.length;
        }

        fromTaskRows.innerHTML = from;
        toTaskRows.innerHTML = to;
    }

    // UPDATE TASK VIEW

    function updatePaginatedView(tasks) {
        TodoRenderer.renderList(tasks);
    }

    function updateView(tasks) {
        UpdateLocalStorage.saveTaskInLocalStorage(tasks);
        TodoRenderer.renderList(tasks);
        view.updateTasksSum(tasks);
    }

    return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function (event) {
    TodoService.updateTasks();
    TodoRenderer.renderList(TodoView.getTodos());
    TodoView.showSlicedTableAfterSizeChange();
    TodoView.updateTasksSum(TodoView.getTodos());
});