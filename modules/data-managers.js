export const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : [];
};

export const removeStorage = (index) => {
    const tasks = JSON.parse(localStorage.getItem('todos')) || [];

    tasks.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(tasks));
}; 
