/*
//Interagindo com botões:
function clickOn(){
    document.getElementById("nossa").innerHTML = "<b>Parabens você clicou!!!</b>";
}
function redirVai(element){
  //document.getElementById("nossa").innerHTML = "<b>Passe o mouse</b>";
element.innerHTML = "<b>Passe o mouse</b>";//funciona com this
}
function redirSai(element){
  //document.getElementById("nossa").innerHTML = "<b>Voce passou o mouse</b>";
  element.innerHTML = "<b>Voce passou o mouse</b>";//funciona com this
}
function funcMude(element){
  console.log(element.value);
  alert(element.value);
}
*/
/*
var numOk = prompt("Digite 1 para soma 2 para multilpicação:");
var numUm = parseInt(numOk);
var n1 = 10;
var n2 = 30;
if(numUm === 1){
function clicUser(){
alert("A soma dá:" + n1 + n2);
 console.log(n1 + n2);
 }
}else{
alert("Multiplicado dá:" + n1 * n2);
 console.log(n1 * n2);
}
*/
/*
//Funções:17:35
function soma(n1, n2){
 return n1 + n2;
}

function esportes(Futebol, volei, basquete){
   return Futebol.replace(volei, basquete);
}
console.log(soma(1,5));
console.log(esportes("Venceu arco", "arco", "flecha"));

*/
//Audio
<audio id="music">
<source src="music.mp3" type="audio/mpeg">
<source src=”music.ogg” type=’audio/ogg; codec=”vorbis”’>
</audio>
//Datas
var d = new Date();
//O método now() retorna os milisegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC até agora 
var timns = Date.now();
var mes = d.getMonth()+1;
console.log("Mês: ",mes);
var msn = d.getDay();
console.log("Dia: ",msn);
var hora = d.getHours();
console.log("Hora/Minutos/Segundos: ",hora,":",d.getMinutes(),":",d.getSeconds());
var tm = d.getTime();
console.log("getTime: ", tm);
console.log("Date.now() retorna:", timns);
//var ano = d.getFullYear();
//console.log(ano);
//Loops
//var count = 0;

//Loop for
/*
for(cs = 0; cs <= 4; cs++){
   console.log(cs);
};
*/
/*
do while(count < 4){
  count++;
  console.log(count);
};
*/
/*
while(count < 4){
  count++;
  console.log(count);
};
*/
/*
var listaFruta = ["maçã", "pera", "uva", "goiaba", "abacaxi"]
console.log(listaFruta);
listaFruta.push("jaca");//push adiciona o elemento na lista
console.log(listaFruta);
listaFruta.pop();//pop remove o último elemento da lista
console.log(listaFruta);
//colocando - como separador ao invés de vírgula com join
console.log(listaFruta.join(" - "));
console.log(listaFruta[0]);//Escolhendo produtos da lista
*/
/*
//Objetos:
var pessoa = {
  nome: ['Bob', 'Smith'],
  idade: 32,
  sexo: 'masculino',
  interesses: ['música', 'esquiar'],
  bio: function() {
    alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
  },
  saudacao: function() {
    alert('Oi! Eu sou ' + this.nome[0] + '.');
  }
};
console.log(pessoa.nome);
*/
/*
//Exibindo prompt para entradda de dados do usuário
//Entrada de dados com prompt
var numUm = prompt("Digite um número:");
console.log("Você digitou: ", numUm);
*/
/*var num = 20;
var nums = 30;
const textDev = "Desenvolvendo em java sscript";
var tam = textDev.length; 
alert(textDev);
alert(num + nums);
alert("Tamanho da string: " + tam);
alert("Data:" + Date());
//Alterando o texto
//var maior = toUpperCase(textDev);
alert("Retornando maiúsculo: " + textDev);
var trajeto = ["mãe", "floresta", "avó"];
alert(trajeto.pop());
trajeto.push("lobo");
alert(trajeto);
*/
