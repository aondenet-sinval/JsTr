//Controle de eventos do formulário:
//Seleção dos elementos
let form = document.querySelector('form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let submit = document.getElementById('submit');
let para = document.querySelector('p');

form.onsubmit = function(e){
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'Erro: preenchimento incorreto do formulário';
  }else{
    para.textContent = 'Beleza!!!';
  }
}
