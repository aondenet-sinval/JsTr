function inherit(){
    Object.prototype.valor = 10;
    return console.log(this.valor);
};
inherit();
//Criando definindo propriedades a partir do prototype
function defeitos(){
  Object.prototype.inveja = 'ciume';
   console.log(this.inveja);//ciume
  this.mentira = 'inverdades';
    console.log(mentira);//inverdades
}
defeitos();
//sobrescrevendo a propriedade interna
//da função através do prototype
Object.prototype.mentira = 'ilusão';
Object.prototype.inveja;
console.log(defeitos.inveja);//undefined
console.log(defeitos.mentira);//ilusão
