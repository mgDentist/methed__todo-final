import { getStorage, setStorage } from "./data-managers.js";

export const createMainDivContainer = () => {
    const div = document.querySelector('.app-container');

    div.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

    createMainTitle(div);
    createForm(div);
    createTable(div);
};

const createMainTitle = (div) => {
    const h3 = document.createElement('h3');

    h3.textContent = 'Todo App';

    div.append(h3);
};

const createForm = (div) => {
    const form = document.createElement('form');

    form.classList.add('d-flex', 'align-items-center', 'mb-3');

    const label = document.createElement('label');

    label.classList.add('form-group', 'me-3', 'mb-0');

    const input = document.createElement('input');

    input.classList.add('form-control');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'ввести задачу');

    const btnSave = document.createElement('button');

    btnSave.classList.add('btn', 'btn-primary', 'me-3', 'btn-add');
    btnSave.setAttribute('type', 'submit');
    btnSave.textContent = 'Сохранить';

    const btnReset = document.createElement('button');

    btnReset.classList.add('btn', 'btn-warning', 'btn-clear');
    btnReset.setAttribute('type', 'reset');
    btnReset.textContent = 'Очистить';

    div.append(form);
    form.append(label);
    label.append(input);
    form.append(btnSave);
    form.append(btnReset);
};

const createTable = (div) => {
    const tableWrapper = document.createElement('div');
    const tBody = document.createElement('tbody');

    tableWrapper.classList.add('table-wrapper');

    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-bordered');

    const tHead = document.createElement('thead');

    const tr = document.createElement('tr');

    const th1 = document.createElement('th');
    th1.textContent = '№';
    const th2 = document.createElement('th');
    th2.textContent = 'Задача';
    const th3 = document.createElement('th');
    th3.textContent = 'Статус';
    const th4 = document.createElement('th');
    th4.textContent = 'Действия';

    div.append(tableWrapper);
    tableWrapper.append(table);
    table.append(tHead);
    table.append(tBody);
    tHead.append(tr);
    tr.append(th1, th2, th3, th4);
};

export const createTr = () => {
    const tBody = document.querySelector('tbody');

    const todos = getStorage('todos') || [];

    todos.map(({ text, isCompleted }, index) => {
        const tr = document.createElement('tr');
        if (isCompleted) {
            tr.classList.add('table-success');
            tr.classList.remove('table-light');
        } else {
            tr.classList.remove('table-success');
            tr.classList.add('table-light');
        }

        const td1 = document.createElement('td');
        td1.textContent = index + 1;

        const td2 = document.createElement('td');
        td2.textContent = text;
        td2.classList.add('task');

        if (isCompleted) {
            td2.classList.add('text-decoration-line-through');
        } else {
            td2.classList.remove('text-decoration-line-through');
        }

        const td3 = document.createElement('td');
        td3.textContent = isCompleted ? 'Выполнено' : 'В процессе';

        const td4 = document.createElement('td');
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn', 'btn-danger', 'btn-delete', 'me-1');
        btnDelete.textContent = 'Удалить';

        const btnEdit = document.createElement('button');
        btnEdit.classList.add('btn', 'btn-success', 'btn-edit');
        btnEdit.textContent = 'Завершить';

        td4.append(btnDelete);
        td4.append(btnEdit);

        tr.append(td1, td2, td3, td4);

        tBody.append(tr);
    });
};
