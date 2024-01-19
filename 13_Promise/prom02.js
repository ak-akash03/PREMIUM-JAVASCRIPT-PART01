function myPromise() {
    return new Promise((resolve, reject) => {
        const value = false;
        setTimeout(() => {
            if(value){
                // resolve("it's resolve : ")
                resolve();
            }
            else{
                reject();
                // reject("it's reject : ")
            }
        },2000)
    })
}

// myPromise().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

myPromise().then(() => {
    console.log("its resolve :");
}).catch((error) => {
    console.log("its reject : ");
})