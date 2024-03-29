let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
    console.log('Task added to todolist');

    const todo = document.createElement('div');
    todo.classList.add('todo-element');

    const todoBar = document.createElement('div');
    todoBar.classList.add('todo-element-list');

    const todoDate = document.createElement('div');
    todoDate.classList.add('todo-element-bar');
    const date = new Date();
    const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + 'godz.: ' + date.getHours() + ':' + date.getMinutes();
    todoDate.innerText = 
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

