//Controle de eventos do formulário:
//Seleção dos elementos
let form = document.querySelector('form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let submit = document.getElementById('submit');
let para = document.querySelector('p');
let adicionarItem = document.querySelector('.item');
let item = document.getElementById('item');

form.onsubmit = function(e){
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'Erro: preenchimento incorreto do formulário';
  }else{
    listaItem.textContent = 'Beleza!!!';
  }
}

item.addEventListener("focusin", function( event ) {
event.target.style.background = "pink";
}, true);
item.addEventListener("focusout", function( event ) {
event.target.style.background = "red";
alert('Cor modificada');
}, true);
