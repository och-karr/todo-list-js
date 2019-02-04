var UpdateLocalStorage = (function (storage) {

    storage.saveTaskInLocalStorage = function (task) {
        localStorage.setItem("storageTasks", JSON.stringify(task));
    }

    storage.getTasksFromLocalStorage = function () {
        if (localStorage.getItem("storageTasks") == null) {
            var tasks = [];
        } else {
            var tasks = JSON.parse(localStorage.getItem("storageTasks"));
        }
        return tasks;
    }

    return storage;

})(UpdateLocalStorage || {});