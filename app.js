let users = JSON.parse(localStorage.getItem("users")) || [];

function save() {
  localStorage.setItem("users", JSON.stringify(users));
}

function render() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  users.forEach((u, i) => {
    list.innerHTML += `
      <li>
        ${u}
        <button onclick="editUser(${i})">Editar</button>
        <button onclick="deleteUser(${i})">Eliminar</button>
      </li>`;
  });
}

function addUser() {
  let name = document.getElementById("name").value;

  if (name.trim() === "") {
    alert("Ingrese un nombre válido");
    return;
  }

  users.push(name);
  save();
  render();
  document.getElementById("name").value = "";
}

function deleteUser(i) {
  users.splice(i, 1);
  save();
  render();
}

function editUser(i) {
  let newName = prompt("Nuevo nombre:");

  if (newName && newName.trim() !== "") {
    users[i] = newName;
    save();
    render();
  }
}

render();