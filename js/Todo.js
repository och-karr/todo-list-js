function Todo(description, priority) {
    this.id = Todo.UID++;
    this.description = description;
    this.priority = priority;
    this.isCompleted = false;
}

Todo.UID = 1;