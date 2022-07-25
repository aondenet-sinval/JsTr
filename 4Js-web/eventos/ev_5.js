//usando eventos js
//Exibir vídeo:
let btn = document.querySelector('button');
let video = document.querySelector('video');
let videoBox = document.querySelector('div');
let header = document.querySelector('header');

//Função para teste de bubling
header.onclick = function(){
  videoBox.setAttribute('class', 'hidden');
}

btn.onclick = function(){
  videoBox.setAttribute('class', 'showing');
};

video.onclick = function(e){
  video.play();
  e.stopPropagation();
  //bloqueando a propagação do clique
  //para o elemento html superior header
};
