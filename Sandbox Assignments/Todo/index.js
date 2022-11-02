const addButton = document.querySelector(".addButton");
const inputTodo = document.querySelector(".input");
const container = document.querySelector(".container");
let toDos = [];

// Adds EventListeners on edit and delete buttons
function AddListeners() {
  let editButton = document.querySelectorAll(".editButton");
  let deleteButton = document.querySelectorAll(".deleteButton");
  editButton.forEach((e) => e.addEventListener("click", (e) => Edit(e)));
  deleteButton.forEach((e) => e.addEventListener("click", (e) => Delete(e)));
}

function Delete(e) {
  let todo = toDos.splice(e.target.dataset.id, 1);
  RenderTodos();
}

function Edit(e) {
  let todo = toDos.splice(e.target.dataset.id, 1);
  inputTodo.value = todo;
  RenderTodos();
}

// Renders todo list
function RenderTodos() {
  container.innerHTML = "";
  localStorage.setItem("todos", JSON.stringify(toDos));
  toDos.forEach((e, i) => {
    let item = document.createElement("div");
    item.classList.add("item", `todo-${i}`);
    item.innerHTML = `
              <input data-id="${i}" type="text" class="item_input" value="${e}" disabled />
              <button data-id="${i}" class="editButton">Edit</button>
              <button data-id="${i}" class="deleteButton">Delete</button>`;
    container.appendChild(item);
  });
  AddListeners();
}

function Additem() {
  toDos.push(inputTodo.value);
  inputTodo.value = "";
  RenderTodos();
}

window.onload = () => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  toDos = todos;
  RenderTodos();
};

addButton.addEventListener("click", () => Additem());
