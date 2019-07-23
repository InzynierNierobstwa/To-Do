let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
    console.log('Task added to todolist');
}

document.addEventListener('DOMContentLoaded', function() {
    todoList = document.querySelector('#todoList');
    todoForm = document.querySelector('#todoForm');
    todoSearch = document.querySelector('#todoSearch');

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        if (textarea.value !== '') {
            addTask(textarea.value);
            textarea.value = '';
        }
    });
});

