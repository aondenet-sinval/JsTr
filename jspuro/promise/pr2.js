var p2 = new Promise(function(resolve, reject) {
   resolve(1);
});

p2.then(function(value) {
  console.log(value); // 1
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value + 1);
    }, 1000);
  });
}).then(function(value) {
  console.log(value); // 2
});
