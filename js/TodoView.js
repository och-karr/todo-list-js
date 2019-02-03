var TodoView = (function(view) {
 
    var todos = [
        new Todo('create an application', 'High'),
        new Todo('eat something tasty', 'Medium'),
        new Todo('Drink a beer', 'Low')
    ];
 
    view.getTodos = function() {
        return todos;
    }
 
    view.addTodo = function() {
        alert('add!');
    };
 
    view.deleteTodo = function(todoId) {
        alert('delete!');
    };
 
    view.changeState = function(checkbox, todoId) {
        alert('toggle!');
    };
 
    return view;
 
})(TodoView || {});


document.addEventListener("DOMContentLoaded", function(event) {
    TodoRenderer.renderList(TodoView.getTodos());
});