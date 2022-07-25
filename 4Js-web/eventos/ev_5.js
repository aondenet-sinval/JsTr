//usando eventos js
//Exibir vídeo:
let btn = document.querySelector('button');
let video = document.querySelector('video');
let videoBox = document.querySelector('div');

btn.onclick = function(){
  videoBox.setAttribute('class', 'showing');
};

video.onclick = function(){
  video.play();
};
