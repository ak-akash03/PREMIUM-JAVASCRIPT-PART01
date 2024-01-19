function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("Okkkkk : ");
    })
}

myPromise().then((data) => {
    console.log(data);
    data += "Ak : ";
    return data
}).then((data) => {
    console.log(data);
    data += "Akash"
    return data
}).then((data) => {
    console.log(data);
})