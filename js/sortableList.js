const list = document.getElementById('todoList');

Sortable.create(list, {
    options: {
        animation: 100,
        group: 'list-1',
        draggable: '#list li',
        handle: '#list li',
        sort: true,
        filter: '.sortable-disabled',
        chosenClass: 'active',
    },
    onSort: function (e) {
        let items = e.to.children;
        let result = [];
        for (let i = 0; i < items.length; i++) {
            result.push(items[i].className);
        }

        for (let i = 0; i < result.length; i++) {
            let newItem = items[i].className.replace('todo ', '')
            updateTodoOrder(newItem, i)
        }
    }
});