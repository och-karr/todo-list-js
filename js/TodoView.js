document.addEventListener("DOMContentLoaded", function(event) {
 
    // var addTodoInput = document.querySelector('#todo-input');
    // var prioritySelect = document.querySelector('#select-priority');
    // var addTodoBtn = document.querySelector('#add-todo-btn');
 
    // addTodoBtn.addEventListener('click', function (event) {
    //     var inputValue = addTodoInput.value;
    //     var selectValue = prioritySelect.value;
    //     alert(inputValue);
    //     alert(selectValue);
    // });

    var todos = [
        new Todo('zadanie 1', 'Low'),
        new Todo('zadanie 2', 'Low' ),
        new Todo('zadanie 3', 'Low')
    ];
 
    TodoRenderer.renderList(todos);
 
});