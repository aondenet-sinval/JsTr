// e = event. Exemplo: 'mousedown'
// fn = function
/*
add('mousedown', function())
*/
const add = (e, fn)=>{
  document.addEventListener(e, fn)
}

const rem = (e, fn)=>{
    document.removeEventListener(e, fn)
}

export default { add, rem }
