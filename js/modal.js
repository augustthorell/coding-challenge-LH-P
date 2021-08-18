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
  let key = createTodoName.replace(/\s/g, "");
  let category = document.getElementById('categoryList').value;
  let dueDate = document.getElementById('dueDate').value;
  createTodo(key, createTodoName, category, dueDate);
  clearInputFields();
  renderTodos();

}


function onlyAlphabets() {

  var regex = /^[a-zA-Z]*$/;
  if (regex.test(document.f.nm.value)) {

    //document.getElementById("notification").innerHTML = "Watching.. Everything is Alphabet now";
    return true;
  } else {
    document.getElementById("notification").innerHTML = "Alphabets Only";
    return false;
  }


}
