console.log("javascript mini project : demo");

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
// const deletee = document.querySelectorAll(".delete");
const li = document.querySelectorAll("li");

button.addEventListener("click", () => {

    
    let delbtn = document.createElement("button");
    delbtn.classList.add("delate");
    delbtn.innerHTML = "delate";
    
    let item = document.createElement("li");
    item.innerHTML = input.value

  item.appendChild(delbtn)
  ul.appendChild(item);
  console.log(item);

  input.value = "";
});

const delate = document.querySelectorAll('delate')

for (const iterator of object) {
    delate.addEventListener('click', ()=>{
        // delate.parentElement = 
        console.log("parent element deleted");
    })
}