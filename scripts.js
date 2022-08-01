const newTask = (count, text) => {
  // создаём элем. li со значением text
  //
  return `<li id = "${count}" class = "toDoTask">${count}: ${text}
  <button onClick = "delElement(${count})" >
  delete
  </button>
  <button onClick = "changeElement(${count})" >
  change
  </button>
  </li>`
}

const toDoList = document.getElementById("myUl")

function newElement() {
  const count = toDoList.children.length
  // Получаем HTML элемент инпута
  const inputValue = document.getElementById("myInput")
  // получаем именно текст введённый в инпут, с помощью значения парам-а value
  // перем-ой inputValue
  const task = newTask(count + 1, inputValue.value)
  toDoList.insertAdjacentHTML("beforeend", task)
  inputValue.value = ""
}

function delElement(taskNum) {
  const childCount = taskNum - 1
  toDoList.removeChild(toDoList.children[childCount])
  reRenderDom()
}

function reRenderDom() {
  let elements = []
  for (let obj of toDoList.children) {
    elements.push(obj.innerText.split(`: `)[1].split(` delete`)[0])
  }
  toDoList.innerHTML = ``
  for (let i = 0; i < elements.length; i++) {
    const task = newTask(i + 1, elements[i])
    toDoList.insertAdjacentHTML("beforeend", task)
  }
}

function changeElement(taskNum) {
  const childCount = taskNum - 1
  const newText = prompt("Введите новый текст")
  let elements = []
  for (let obj of toDoList.children) {
    elements.push(obj.innerText.split(`: `)[1].split(` delete`)[0])
  }
  elements[childCount] = newText
  toDoList.innerHTML = ``
  for (let i = 0; i < elements.length; i++) {
    const task = newTask(i + 1, elements[i])
    toDoList.insertAdjacentHTML("beforeend", task)
  }
}
