//usando eventos js
//Com addEventListener
let divs = document.querySelectorAll('div');

function random(number){
  return Math.floor(Math.random()*(number+1));
};

//Ouvinte de eventos
function mudarDivs(e){
  let rdnCol = 'rgb(' + random(255) + ',' + random(255) +
                  ',' + random(255) + ')';
  e.target.style.backgroundColor = rdnCol;
};
//percorrendo e selecionando qualquer elemento clicado
for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    mudarDivs(e);
  }
}
