console.log('start scripting : ');
// const bucket = ["coffee", "chips", "vegetables", "salt", "ricee"];
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

function ricePromise() {
    return new Promise((resolve, reject) => {
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
}


ricePromise().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})



console.log('end scripting : ');