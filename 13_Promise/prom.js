// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'ricee']
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

//  produce _____________________________________________________________

const myPromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    // console.log("its Available : ");
    resolve("it true : ");
  } else {
    // console.log("its not Available : ");
    reject(new Error("something is missing : "));
  }
});

// consume_______________________________________________________________
// how to consume

// myPromise.then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//     // error
//   }
// );

myPromise.then((data) => {
    console.log(data);
}).catch((error) => {console.log(error);})



console.log("start coding :");
for (let index = 0; index < 100; index++) {
    console.log(Math.random()*10);    
}


console.log("end coding : ");
