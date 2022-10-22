var p1 = new Promise(function(resolve, reject) {
  resolve("Success!");
  // or
  //reject ("Error!");
});
p1.then(function(value) {
  const valor = 'a' / 2;
  console.log(value, valor); // Success!
}, function(reason) {
  console.log(reason); // Error!
});
