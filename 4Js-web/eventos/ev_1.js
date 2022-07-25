//usando eventos js
//Mudando cor
let btn = document.querySelector('button');

function random(number){
  return Math.floor(Math.random()*(number+1));
};
//Ouvinte de eventos
btn.onmouseout = function(){
  let rdnCol = 'rgb(' + random(255) + ',' + random(255) +
                  ',' + random(255) + ')';
  document.body.style.backgroundColor = rdnCol;
};
