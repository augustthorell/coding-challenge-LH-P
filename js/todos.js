function renderTodos() {
    const todoBtnContainer = document.getElementById("todoList");
    todoBtnContainer.innerHTML = "";
    let todos = getAllTodos();

    for (var i = 0; i < todos.length; i++) {

        let todo = document.createElement('li');
        todo.className = 'todo' + ' ' + todos[i].key;

        let nameBtnWrapper = document.createElement('div');
        nameBtnWrapper.className = 'nameBtnWrapper';
        let completed = document.createElement('button');
        completed.className = 'completedBtn' + ' ' + todos[i].key;

        let nameWrapper = document.createElement('dív');
        nameWrapper.className = 'nameWrapper' + ' ' + todos[i].key;
        let category = document.createElement('p');
        let title = document.createElement('p');
        category.className = 'categoryHeading';
        title.className = 'todoTitle' + ' ' + todos[i].key;


        let dateWrapper = document.createElement('div');
        let dueDateHeading = document.createElement('p');
        let dueDate = document.createElement('p');
        dateWrapper.className = 'dueDateWrapper';
        dueDateHeading.className = 'dueDateHeading';
        dueDateHeading.innerHTML = 'Due date';
        dueDate.className = 'dueDate' + ' ' + todos[i].key;
        dueDate.innerHTML = countdown(todos[i].date);

        title.innerHTML = todos[i].name;


        todos[i].category === 'Choose category' ? category.innerHTML = '' : category.innerHTML = todos[i].category;


        let removeTodo = document.createElement('button');
        removeTodo.className = 'removeBtn' + ' ' + todos[i].key;
        removeTodo.innerHTML = '&times';

        nameWrapper.appendChild(category);
        nameWrapper.appendChild(title);

        dateWrapper.appendChild(dueDateHeading);
        dateWrapper.appendChild(dueDate);



        nameBtnWrapper.appendChild(completed);
        nameBtnWrapper.appendChild(nameWrapper);

        todo.appendChild(removeTodo);
        todo.appendChild(nameBtnWrapper);
        todo.appendChild(dateWrapper);

        todoBtnContainer.appendChild(todo);
    }
}
renderTodos();

let completedBtns = document.querySelectorAll('.completedBtn')

completedBtns.forEach(completedBtn => {
    completedBtn.addEventListener('click', (e) => {

        let target = e.target.className.replace('completedBtn ', '')

        updateTodo(target);
        checkCompletedTodos();
    })
});

function checkCompletedTodos() {


    let todoArray = getAllTodos();
    todoArray.forEach(todo => {

        if (todo.complete === true) {

            document.querySelector('.dueDate' + '.' + todo.key).innerHTML = 'DONE';
            document.querySelector('.todoTitle' + '.' + todo.key).classList.add('completedTodoTitle');
            document.querySelector('.todo' + '.' + todo.key).classList.add('completedTodo');
            document.querySelector('.completedBtn' + '.' + todo.key).innerHTML = '&#x2714;';
            document.querySelector('.completedBtn' + '.' + todo.key).style.backgroundColor = '#39C6A3';
        }
        else if (todo.complete === false) {

            document.querySelector('.dueDate' + '.' + todo.key).innerHTML = countdown(todo.date);
            document.querySelector('.todoTitle' + '.' + todo.key).classList.remove('completedTodoTitle');
            document.querySelector('.todo' + '.' + todo.key).classList.remove('completedTodo');
            document.querySelector('.completedBtn' + '.' + todo.key).innerHTML = '';
            document.querySelector('.completedBtn' + '.' + todo.key).style.backgroundColor = '#fff';
        } else {
            return;
        }
    })
}
checkCompletedTodos();

let removeBtns = document.querySelectorAll('.removeBtn')
removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', (e) => {
        let target = e.target.className.replace('removeBtn ', '')
        removeTodo(target);
        window.location.reload();
    })
});

