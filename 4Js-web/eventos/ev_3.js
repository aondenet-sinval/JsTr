//usando eventos js
//Com addEventListener
let divs = document.querySelectorAll('div');
let buttons = document.querySelectorAll('button');
function random(number){
  return Math.floor(Math.random()*(number+1));
};

//Ouvinte de eventos
function mudarDivs(e){
  let rdnCol = 'rgb(' + random(255) + ',' + random(255) +
                  ',' + random(255) + ')';
  e.target.style.backgroundColor = rdnCol;
};

//percorrendo e selecionando qualquer elemento div clicado
for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    mudarDivs(e);
  }
};

//percorrendo e selecionando qualquer elemento button clicado
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function(e) {
    mudarDivs(e);
  }
};
