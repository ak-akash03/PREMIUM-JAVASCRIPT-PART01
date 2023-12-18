//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// console.table([id , anotherId])

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
// console.log(myFunction());
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// let myName = "akash rathod"
// let anotherName = myName
// anotherName = "sagar rathod"

// console.log(myName);
// console.log(anotherName);

let ak = {
    Name : "Akash Rathod",
    Age : 20
}
let as = ak

// console.log(ak.Name);
// console.log(ak.Age);
// console.log(as.Name);
// console.log(as.Age);


// console.log("--------------------------");


as.Name = "Sagar Rathod"
as.Age = 21


// console.log(ak.Name);
// console.log(ak.Age);
// console.log(as.Name);
// console.log(as.Age);

