var TodoService = (function (service) {

    var tasks = [];

    service.updateTasks = function () {
        tasks = UpdateLocalStorage.getTasksFromLocalStorage();
    }

    service.getTasks = function () {
        return tasks;
    }

    service.addTask = function (description, priority) {
        var todo = new Todo(description, priority);
        tasks.push(todo);
    }

    service.deleteTask = function (todoId) {
        tasks = tasks.filter(function (task) {
            return task.id !== todoId;
        });
    }

    service.isDone = function (isCompleted, todoId) {
        var task = tasks.filter(function (task) {
            return task.id === todoId;
        })[0];

        task.isCompleted = isCompleted;
    }

    service.getPaginatedTasks = function (tableSize, tableNumber) {

        return tasks.slice((tableNumber - 1) * tableSize, tableNumber * tableSize);
    }

    return service;

})(TodoService || {});