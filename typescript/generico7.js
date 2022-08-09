//declarando função com mesma assinatura da interface
function processarTipo(valor, mensagem) {
    console.log(mensagem);
    return valor;
}
//declaração da variável:
var processar = processarTipo;
var retornarNum = processar(120, 'velocidade');
var retornarStr = processar('velocidade', 120);
