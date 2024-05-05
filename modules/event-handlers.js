import { setStorage, getStorage, removeStorage } from "./data-managers.js";
import { auth } from "./authorization.js";
import { createTr } from "./creaters.js";

export const addTodoClick = () => {
    const input = document.querySelector('.form-control');
    const addBtn = document.querySelector('.btn-add');

    const todos = getStorage(auth) || [];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const todoText = input.value.trim();

        if (todoText) {
            const todo = { text: todoText, isCompleted: false };
            todos.push(todo);
            setStorage(auth, todos);

            input.value = '';
        }
        createTr();
    });
};

export const manageTask = () => {

    const table = document.querySelector('table');

    table.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-edit')) {
            const index = event.target.closest('tr').rowIndex - 1;
            const todos = getStorage(auth) || [];

            if (!todos[index].isCompleted) {
                todos[index].isCompleted = true;
            } else {
                todos[index].isCompleted = false;
            }

            setStorage(auth, todos);
            createTr();
        } else if (event.target.classList.contains('btn-delete')) {
            const index = event.target.closest('tr').rowIndex - 1;
            removeStorage(index);
            createTr();
        }
    });
};
