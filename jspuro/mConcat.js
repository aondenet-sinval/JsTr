const arr = ['Antonia', 'Antoniana', 'Andréia'];
let nArr = arr.concat('Ana');
console.log(nArr);
[ 'Antonia', 'Antoniana', 'Andréia', 'Ana' ]
let nArr2 = arr.concat([[['Adriana']]]);
console.log(nArr2);
//[ 'Antonia', 'Antoniana', 'Andréia', [ [ 'Adriana' ] ] ]
let nArr3 = arr.concat([['Mariana']],[['Joana']]);
console.log(nArr3);
//[ 'Antonia', 'Antoniana', 'Andréia', [ 'Mariana' ], [ 'Joana' ] ]
console.log(nArr3[4]);
