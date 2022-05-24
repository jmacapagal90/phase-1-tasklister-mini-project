document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleToDo(e.target.querySelector("input").value)
    }
  )
});

function handleToDo (todo){
  const ul = document.getElementById("tasks")
  let li  = document.createElement("li")
  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = "x"
  li.textContent = `${todo} `
  li.appendChild(btn)
  ul.appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
