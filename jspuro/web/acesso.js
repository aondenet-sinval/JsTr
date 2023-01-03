const setAcesso = async () => {
const privacy = await "Aceito a política de privacidade"
window.localStorage.setItem(
      'inicioLogin', privacy
    )

let concordo = await window.localStorage.getItem('inicioLogin')
console.log('concordo ',concordo);
alert(concordo)
}
let concordo = window.localStorage.getItem('inicioLogin')

if(!concordo){
const a = 'Conhe&ccedil;a nossa pol&iacute;tica de privacidade.'
const b = 'Caso concorde clique em '
const c = '<button onclick="setAcesso()">Aceita</button>'
const apoli = `${a} ${b} ${c}`
  document.getElementById('demo').innerHTML=apoli
}
