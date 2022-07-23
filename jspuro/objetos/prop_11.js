//Descobrindo informações sobre o tipo do objeto:
function classof(o) {
if (o === null) return "Null";
if (o === undefined) return "Undefined";
return Object.prototype.toString.call(o).slice(8,-1);
};

console.log(classof([]));//Array
console.log(Date);//Function Date
console.log(" ");//vazio
