interface ProcessarValor<Tip1, Tip2>{
  (valor: Tip1, mensagem: Tip2): Tip1;
}
//declarando função com mesma assinatura da interface
function processarTipo<Tip1, Tip2>(valor: Tip1, mensagem: Tip2): Tip1{
  console.log(mensagem);
  return valor;
}

//declaração da variável:
let processar: ProcessarValor<number,string> = processarTipo;
let retornarNum = processar(120,'velocidade');
let retornarStr = processar('velocidade',120);//Erro de tipo
