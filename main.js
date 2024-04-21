import { createMainDivContainer, createTr } from "./modules/creaters.js";
import { addTodoClick, completeTask, deleteTask } from "./modules/event-handlers.js";

window.addEventListener('DOMContentLoaded', () => {
    createMainDivContainer();
    addTodoClick();
    createTr();
    deleteTask();
    completeTask();
});