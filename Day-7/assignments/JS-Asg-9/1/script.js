// 1. Create a promise which can be either fulfilled or rejected after 5 secs
let Delay = false;
setTimeout(() => {
  Delay = true;
}, 5000);
const promiseFiveSec = new Promise((fulfil, reject) => {
  setTimeout(() => {
    if (Delay) {
      fulfil("Promise Fulfiled");
    } else {
      reject("Promise rejected");
    }
  }, 5003);
});
console.log(promiseFiveSec);
promiseFiveSec
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
