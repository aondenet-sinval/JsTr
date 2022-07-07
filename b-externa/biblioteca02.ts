export function retornarAlunos(nome: string){
  let nomeTamanho = getLength(nome);
  console.log(`Tamanho do nome do aluno ${nome} é ${nomeTamanho}`);
}
function getLength(mensagem: string): number{
  return mensagem.length;
}
