//usando genéricos com interfaces
interface RetornaValor<Tipo,Tp>{
  valor: Tipo;
  mensagem: Tp;
}

let retornarNum: RetornaValor<number, string> = {
  valor: 25,
  mensagem: 'olá'
}

let retornarString: RetornaValor<string,number> = {
  valor: 'olá',
  mensagem: 25
}
console.log(retornarNum.valor + " " + retornarNum.mensagem);//25 olá
