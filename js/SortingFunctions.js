//sort by Name function

var isNameChangeOrder = true;

function sortTableByName(todos) {

  var switching;
  var n = todos.length - 1;

  if (isNameChangeOrder) {

    isNameChangeOrder = false;
    do {
      switching = false;
      for (var i = 0; i < n; i++) {
        if (todos[i].description < todos[i + 1].description) {
          var tempRow = todos[i];
          todos[i] = todos[i + 1];
          todos[i + 1] = tempRow;
          switching = true;
        }
      }
      n--;
    } while (switching);

  } else {
    isNameChangeOrder = true;
    do {
      switching = false;
      for (var i = 0; i < n; i++) {
        if (todos[i].description > todos[i + 1].description) {
          var tempRow = todos[i];
          todos[i] = todos[i + 1];
          todos[i + 1] = tempRow;
          switching = true;
        }
      }
      n--;
    } while (switching);
  }
  return todos;
}

//sort by Priority function

var isPriorityChangeOrder = true;

function sortTableByPriority(todos) {

  var sortedTable = [];
  var lowPriorityTable = [];
  var mediumPriorityTable = [];
  var highPriorityTable = [];

  for (var i = 0; i < todos.length; i++) {

    if (todos[i].priority == "Low") {
      lowPriorityTable.push(todos[i]);
    } else if (todos[i].priority == "Medium") {
      mediumPriorityTable.push(todos[i]);
    } else if (todos[i].priority == "High") {
      highPriorityTable.push(todos[i]);
    }
  }

  if (isPriorityChangeOrder === true) {

    isPriorityChangeOrder = false;

    sortedTable = sortedTable.concat(highPriorityTable);
    sortedTable = sortedTable.concat(mediumPriorityTable);
    sortedTable = sortedTable.concat(lowPriorityTable);

  } else {

    isPriorityChangeOrder = true;

    sortedTable = sortedTable.concat(lowPriorityTable);
    sortedTable = sortedTable.concat(mediumPriorityTable);
    sortedTable = sortedTable.concat(highPriorityTable);
  }

  return sortedTable;
}


//sort by Done function

var isDoneChangeOrder = true;

function sortTableByDone(todos) {

  var switching;
  var n = todos.length - 1;

  if (isDoneChangeOrder) {

    isDoneChangeOrder = false;
    do {
      switching = false;
      for (var i = 0; i < n; i++) {
        if (todos[i].isCompleted < todos[i + 1].isCompleted) {
          var tempRow = todos[i];
          todos[i] = todos[i + 1];
          todos[i + 1] = tempRow;
          switching = true;
        }
      }
      n--;
    } while (switching);

  } else {
    isDoneChangeOrder = true;
    do {
      switching = false;
      for (var i = 0; i < n; i++) {
        if (todos[i].isCompleted > todos[i + 1].isCompleted) {
          var tempRow = todos[i];
          todos[i] = todos[i + 1];
          todos[i + 1] = tempRow;
          switching = true;
        }
      }
      n--;
    } while (switching);
  }
  return todos;
}