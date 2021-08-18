function createTodo(key, added, name, category, date) {
    const todo = {
        key: key,
        added: added,
        name: name,
        category: category,
        date: date,
        complete: false,
    }
    localStorage.setItem(key, JSON.stringify(todo))
}

function updateTodo(todoName) {
    let todo = getTodo(todoName);
    todo.complete = !todo.complete;
    localStorage.setItem(todoName, JSON.stringify(todo));
}

function updateTodoOrder(todoName, i) {
    let todo = getTodo(todoName)
    todo.added = getMilliseconds() + i;
    localStorage.setItem(todoName, JSON.stringify(todo));
}

function getTodo(name) {
    return JSON.parse(localStorage.getItem(name));
}

function getAllTodos() {
    let values = [];
    keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    document.getElementById('todoNum').innerHTML = values.length;
    return values.sort();
}

function removeTodo(name) {
    localStorage.removeItem(name);
}
