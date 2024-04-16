export const createMainDivContainer = () => {
    const div = document.querySelector('.app-container');

    div.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

    createMainTitle(div);
    createForm(div);
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

    btnSave.classList.add('btn', 'btn-primary', 'me-3');
    btnSave.setAttribute('type', 'submit');
    btnSave.textContent = 'Сохранить';

    const btnReset = document.createElement('button');

    btnReset.classList.add('btn', 'btn-warning');
    btnReset.setAttribute('type', 'reset');
    btnReset.textContent = 'Очистить';

    div.append(form);
    form.append(label);
    form.append(input);
    form.append(btnSave);
    form.append(btnReset);

    console.log(input)
};
