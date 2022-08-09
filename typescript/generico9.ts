//Usando Classe genérica sem implementação de interface
class processarVenda<T1,T2>{
  private _preco: T1;
  private _descricao: T2;
  constructor(preco: T1, descricao: T2){
    this._preco = preco;
    this._descricao = descricao;
  }
  getPrecoDescricao() : T1{
    console.log(this._descricao);
    return this._preco;
  }
}
//Declaração de variável com definição de tipo e valor
let vender = new processarVenda<number, string>(80.00,'Calça Jeans feminina');
vender.getPrecoDescricao();
