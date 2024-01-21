// const myNums = [1,2,3]

// const val = myNums.reduce((prev,current) => {
//     return prev + current 
// }, 0)

// console.log(val);


const course = [
    {
        CourseName : "Js Course",
        Price : 1999
    },
    {
        CourseName : "React Course",
        Price : 2999
    },
    {
        CourseName : "NodeJs Course",
        Price : 3999
    },
    {
        CourseName : "MongoDB Course",
        Price : 4999
    },
]

const totalPrice = course.reduce((total , item) =>  total + item.Price , 0)
console.log(totalPrice);