import { createMainDivContainer, createTr } from "./modules/creaters.js";
import { addTodoClick, manageTask } from "./modules/event-handlers.js";
import { saveBtnToggleStatus } from "./modules/event-handlers.js";

window.addEventListener('DOMContentLoaded', () => {
    createMainDivContainer();
    addTodoClick();
    createTr();
    manageTask();
    saveBtnToggleStatus();
});