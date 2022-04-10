import { addTodo } from "./addTodo.js";


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});