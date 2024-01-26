console.log("Hello Ak");

const input = document.querySelector('input')
const addTodo = document.querySelector('.addTodo')
const ul = document.querySelector('ul')

addTodo.addEventListener('click', () => {
    // console.log(input.value);

    const addP = document.createElement('p')
    addP.innerHTML = input.value

    console.log(addP);

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = "delete"
    deleteButton.classList.add('delete')

    addP.appendChild(deleteButton)
    ul.appendChild(addP)

    input.value = ""
})

const deleteBtn = document.querySelectorAll(".delete")

console.log(deleteBtn);


for (iterator of deleteBtn) {
    iterator.addEventListener('click',() => {
        console.log("clicked to delete : ");
    })
}