const item = document.getElementById("item")
const list = document.querySelector("ul")
const form = document.getElementById("allForm")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  addItem()
})

let counter = 0

function addItem() {

const item = document.getElementById("item").value.trim()

if (item === "") {
  alert("Por favor, insira um item válido.")
  return
}

counter++

const newItem = document.createElement("li")
const itemName = document.createElement("label")
const checkbox = document.createElement("input")
const deleteButton = document.createElement("button")
const deleteIcon = document.createElement("img")

deleteButton.onclick = function() {
  list.removeChild(newItem)
}

const itemId = `item${counter}`
deleteIcon.src = "assets/trash.svg"
checkbox.type = "checkbox"
checkbox.id = itemId

itemName.htmlFor = itemId
itemName.textContent = item

newItem.append(checkbox, itemName, deleteButton)
list.appendChild(newItem)
deleteButton.appendChild(deleteIcon)


document.getElementById("item").value = ""
}
