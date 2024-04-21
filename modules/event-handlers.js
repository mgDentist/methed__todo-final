import { setStorage, getStorage, removeStorage } from "./data-managers.js";
import { createTr } from "./creaters.js";

export const addTodoClick = () => {
    const input = document.querySelector('.form-control');
    const addBtn = document.querySelector('.btn-add');

    const todos = getStorage('todos') || [];

    addBtn.addEventListener('click', () => {
        const todoText = input.value.trim();

        if (todoText) {
            const todo = { text: todoText, isCompleted: false };
            todos.push(todo);
            setStorage('todos', todos);

            input.value = '';
        }
    });
};

export const deleteTask = () => {
    const btnsDelete = document.querySelectorAll('.btn-delete');

    btnsDelete.forEach((btn, index) => {
        btn.dataset.index = index;

        btn.addEventListener('click', function () {
            const index = this.dataset.index
            removeStorage(index)
            document.location.reload(); 
        });
    });
};

export const completeTask = () => {
    const btnsEdit = document.querySelectorAll('.btn-edit');

    btnsEdit.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const todos = getStorage('todos') || [];
            
            if (!todos[index].isCompleted) {
                todos[index].isCompleted = true;
            
            } else {
                todos[index].isCompleted = false;
            }

            setStorage('todos', todos);
            createTr();
            document.location.reload(); 
        });
    });
};