//Acesso ao filho de section a
const link = document.querySelector('section a');
//Acessando o button dentro da classe .button
const btn = document.querySelector('.button button');
const secB = document.querySelector('section b');
const btnPar = document.querySelector('.par-button button');
const bPar = document.querySelector('b');
const btnTexto = document.querySelector('.par-texto button');
const btnMover = document.querySelector('.coluna-direita button');
const textoMv = document.querySelector('.texto-movido');
const btnRemover = document.querySelector('.remover');


btn.onclick = function(){
  link.textContent = 'Aondenet: "Sinval Gomes desenvolvimento Web"';
  link.href='https://www.aondenet.com'
}

//Criação do páragrafo

btnPar.onclick = function(){
  const par = document.createElement('p');
  par.textContent = 'Sem preguiça da pra mexer no DOM';
  bPar.appendChild(par);
}
//Texto a ser movido definido globalmente:
const texto = document.createTextNode('A fonte do conhecimento para essas linhas é o MDN');
btnTexto.onclick = function(){
  const meuTexto = document.querySelector('.bolds');
  meuTexto.appendChild(texto);
}
//Movendo o parágrafo criado:
btnMover.onclick =  function(){
  textoMv.appendChild(texto);
}
//Removendo o Paragrafo
btnRemover.onclick = function(){
  textoMv.removeChild(texto);
  texto.remove();
  //Implementação para navegadores mais antigos
  //texto.parentNode.removeChild(texto);
}
