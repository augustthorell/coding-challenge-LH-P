const modal = document.getElementById("myModal");

document.querySelector(".addBtn").addEventListener('click', () => {
  modal.style.display = "block";
});

function clearInputFields() {
  document.getElementById("submitForm").reset();
  modal.style.display = "none";
}

document.querySelector('.close').addEventListener('click', () => {
  clearInputFields();
})

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    clearInputFields();
  }
})

function addTodo() {
  let createTodoName = document.getElementById("createTodoName").value;
  let className = createTodoName.replace(/\s/g, "");
  let category = document.getElementById('categoryList').value;
  let dueDate = document.getElementById('dueDate').value;
  let now = getMilliseconds()
  createTodo(className, now, createTodoName, category, dueDate);
  clearInputFields();
  renderTodos();
}