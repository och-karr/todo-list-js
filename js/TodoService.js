var TodoService = (function (service) {

    var tasks = [new Todo('wynieść śmieci', "high"), new Todo('wynieść śmieci', "high")];

    service.getTasks = function () {
        return tasks;
    }

    service.addTask = function (description, priority) {
        tasks.push(new Todo(description, priority));
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

    return service;

})(TodoService || {});