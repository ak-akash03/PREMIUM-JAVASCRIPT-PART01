const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")

function changeText(element, text, color, time) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(element){
                element.textContent = text;
                element.style.color = color; 
                resolve();
            }
            else{
                reject();
            }
        }, time)
    })
}

// changeText(heading1, "one", "red", 1000)
// changeText(heading2, "two", "blue", 2000)

// const returnPromise = changeText(heading1, "one", "red", 1000);

// returnPromise.then(() => {
//     return changeText(heading2, "two", "blue", 2000)
// }).then(() => {

// })


changeText(heading1, "one", "red", 1000).then(() => {
    return changeText(heading2, "two", "blue", 1000)
}).then(() => {
    changeText(heading3, "three", "green", 1000)
})