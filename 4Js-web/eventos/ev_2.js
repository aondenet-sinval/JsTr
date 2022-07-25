//usando eventos js
//Com addEventListener
let btn = document.querySelector('button');
let pPar = document.querySelector('p');
let divs = document.querySelectorAll('div');

function random(number){
  return Math.floor(Math.random()*(number+1));
};
//Ouvinte de eventos
function mudarCor(){
  let rdnCol = 'rgb(' + random(255) + ',' + random(255) +
                  ',' + random(255) + ')';
  document.body.style.backgroundColor = rdnCol;
};
btn.addEventListener('click', mudarCor);

//Definindo a mudança no local do clique:

//Ouvinte de eventos
function mudarCorPar(e){
  let rdnCol = 'rgb(' + random(255) + ',' + random(255) +
                  ',' + random(255) + ')';
  e.target.style.backgroundColor = rdnCol;
};
pPar.addEventListener('click', mudarCorPar);

//Ouvinte de eventos
function mudarDivs(e){
  let rdnCol = 'rgb(' + random(255) + ',' + random(255) +
                  ',' + random(255) + ')';
  e.target.style.backgroundColor = rdnCol;
};
for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
  e.target.style.backgroundColor = mudarDivs(e);
  }
}
