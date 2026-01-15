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

if (item.length > 50) {
  alert("O item é muito longo. Por favor, insira um item com até 50 caracteres.")
  return
}

if (list.textContent.includes(item)) {
  alert("Este item já está na lista.")
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
  cleanMessage()
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

let messageTimeout

function cleanMessage() {
  const message = document.querySelector("footer")
  const close = document.querySelector("footer button")
  message.classList.add("show")

  close.onclick = function() {
    message.classList.remove("show")
    clearTimeout(messageTimeout)
  }
  clearTimeout(messageTimeout)
    messageTimeout = setTimeout(() => {
    message.classList.remove("show")
  }, 2000)
}
