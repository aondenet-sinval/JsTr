var items = [
  { name: 'Jane', age: 29, salary: 210 },
  { name: 'Robert', age: 30, salary: 210 },
  { name: 'Julian', age: 28, salary: 210 },
  { name: 'Albert', age: 19, salary: 210 },
  { name: 'Jhon', age: 18, salary: 210 },
  { name: 'Ziam', age: 23, salary: 210 },
  { name: 'Claude', age: 32, salary: 210 }
];
const retornoDesc = items.sort((a, b) => {
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }
  // a must be equal to b
  return 0;
});
console.log('retornoDesc ',retornoDesc)//Desc
const retornoAsc = items.sort((a, b) => {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  // a must be equal to b
  return 0;
});
console.log('retornoAsc ',retornoAsc)//Desc
