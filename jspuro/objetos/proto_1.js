//Criando objeto literal musicas
let musicas = {
  titulo: 'Faroeste Caboclo',
  lancamento: 1995,
  autor: {
    nome: 'Renato',
    sobrenome:  'Russo'
  }
}
//imprimindo nome do autor
console.log(musicas.autor);
//Escrevendo no prototype do objeto músicas
Object.prototype.lancamento = 1970;
console.log(Object.prototype.lancamento);
Object.prototype.autor = {nome: 'Biafra', sobrenome: 'Sss'};
console.log(Object.prototype.autor.nome);
//Herdando do Object prototype
let musicasMpb = new Object();//instancia do objeto musicas
//Referenciando para a propriedade titulo do objeto instanciado
Object.prototype.titulo = 'Lilás';
console.log(musicasMpb.titulo);
