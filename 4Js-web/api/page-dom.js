//Acesso ao filho de section a
const link = document.querySelector('section a');
//Acessando o button dentro da classe .button
const btn = document.querySelector('.button button');
const secB = document.querySelector('section b');
const btnPar = document.querySelector('.par-button button');
const bPar = document.querySelector('b');
const btnTexto = document.querySelector('.par-texto button');


btn.onclick = function(){
  link.textContent = 'Aondenet: "Sinval Gomes desenvolvimento Web"';
  link.href='https://www.aondenet.com'
}

//Criação do páragrafo

btnPar.onclick = function(){
  const par = document.createElement('p');
  par.textContent = 'Sem preguiça da mexer no DOM';
  bPar.appendChild(par);
}

btnTexto.onclick = function(){
  const texto = document.createTextNode('A fonte do conhecimento para essas linhas é o MDN')
  const meuTexto = document.querySelector('.bolds');
  meuTexto.appendChild(texto);
}
