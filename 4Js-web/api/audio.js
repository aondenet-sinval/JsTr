const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const audioElement = document.querySelector('audio');
const playBtn = document.querySelector('button');
const volumeSlider = document.querySelector('.volume');

const audioSource = audioCtx.createMediaElementSource(audioElement);

//tocar/parar
playBtn.addEventListener('click', ()=>{
  //Verificar a politica de estado do contexto: suspenso
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  };
  //Verificando o estado parado
  if (playBtn.getAttribute('class') === 'paused') {
    audioElement.play();
    playBtn.setAttribute('class', 'playing');
    playBtn.textContent = 'Pausar';
    //se a faixa estiver tocando pare
  }else if (playBtn.getAttribute('class') === 'playing') {
    audioElement.pause();
    playBtn.setAttribute('class', 'paused');
    playBtn.textContent = 'Tocar';
  }
  //verificando o estado de execução da trilha:
  audioElement.addEventListener('ended',()=>{
    playBtn.setAttribute('class', 'paused');
    playBtn.textContent = 'Tocar';
  });
});

//Volume:
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener('input', ()=>{
  gainNode.gain.value = volumeSlider.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);
