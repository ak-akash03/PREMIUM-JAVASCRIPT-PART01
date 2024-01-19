const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async task is complete ");
      resolve();
    }, 1000);
  });

  promiseOne.then(() => {
    console.log("promise consumed : ");
  });

  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Task Two ");
      resolve();
    }, 1000);
  }).then(() => {
    console.log("Async 2 resolved : ");
  });

  const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username: "akash", email: "ak.akash" });
    }, 1000);
  });

  promiseThree.then((users) => {
    console.log(users);
  });

  const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ username: "akash", password: "sagar" });
      } else {
        reject("ERROR : something went wrong ");
      }
    }, 1000);
  });

  promiseFour
    .then((user) => {
      console.log(user);
      return user.username;
    })
    .then((username) => {
      console.log(username);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("The Promise Is Either Resolve Or Reject : ");
    });

  // console.log(username);

  const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ username: "Javascript", password: "123" });
      } else {
        reject("ERROR : Javascript Went Wrong : ");
      }
    }, 1000);
  });

  async function consumePromiseFie() {
    try {
      const response = await promiseFive
      console.log(response);
    
    } catch (error) {
      console.log(error);
    }
  }

  consumePromiseFie()