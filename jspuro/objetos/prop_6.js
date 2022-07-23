//Configurando acesso a propriedade preço
let frutas = {
  nome: 'laranja',
  variedade: 'lima',
  peso: 'Kg',
  regiao: 'SC',
  get preco(){
    let valor = peso + ' ' + preco;
    return valor;
  },
}
let novoPreco = (frutas)=>{};
novoPreco.preco = 'g';
console.log(novoPreco.preco);
